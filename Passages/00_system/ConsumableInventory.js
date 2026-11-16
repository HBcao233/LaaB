window.ConsumableItem = class ConsumableItem {
    #name;
    #onUse;
    #tags;
    #icon;
    #description;
    #canUse;

    constructor(consumable) {
        this.#validate(consumable);
        consumable = clone(consumable);
        this.#name = consumable.Name;
        this.#onUse = consumable.OnUse;
        this.#tags = JSON.parse(JSON.stringify(consumable.Tags));
        this.#icon = consumable.Icon;
        this.#description = consumable.Description;
        this.#canUse = consumable.CanUse || function () { return true; };
    }

    getName() {
        return this.#name;
    }
    getTags() {
        return this.#tags;
    }
    getIcon() {
        return this.#icon;
    }
    getDescription() {
        return this.#description;
    }
    consume() {
        this.#onUse();
    }
    canBeConsumed() {
        return this.#canUse();
    }
    hasTag(tag) {
        return this.#tags.includes(tag);
    }

    _getData() {
        return {
            Name: this.#name,
            OnUse: this.#onUse,
            Tags: this.#tags,
            Icon: this.#icon,
            Description: this.#description,
            CanUse: this.#canUse,
        };
    }
    static _fromObj(data) {
        return new this(data);
    }

    #validate(consumable) {
        if (typeof consumable !== 'object') {
            throw new Error('Consumable is invalid: must be an object with the following properties: Name (string), Type (string), OnUse (function), Tags (array of strings), Icon (string), Description (string), CaUse (optional, function that returns a boolean)');
        }
        if (!consumable.hasOwnProperty('Name') || typeof consumable.Name !== 'string') {
            throw new Error('Cannot instantiate ConsumableItem: consumable.Name is invalid: must be a string');
        }
        if (!consumable.hasOwnProperty('OnUse') || typeof consumable.OnUse !== 'function') {
            throw new Error('Cannot instantiate ConsumableItem: consumable.OnUse is invalid: must be a function');
        }
        if (!consumable.hasOwnProperty('Tags') || !Array.isArray(consumable.Tags) || !consumable.Tags.every(tag => typeof tag === 'string')) {
            throw new Error('Cannot instantiate ConsumableItem: consumable.Tags is invalid: must be an array of strings');
        }
        if (!consumable.hasOwnProperty('Icon') || typeof consumable.Icon !== 'string') {
            throw new Error('Cannot instantiate ConsumableItem: consumable.Icon is invalid: must be a string');
        }
        if (!consumable.hasOwnProperty('Description') || typeof consumable.Description !== 'string') {
            throw new Error('Cannot instantiate ConsumableItem: consumable.Description is invalid: must be a string');
        }

        const isCanUseValid = !consumable.hasOwnProperty('CanUse') || typeof consumable.CanUse === 'function';
        if (!isCanUseValid) {
            throw new Error('Cannot instantiate ConsumableItem: consumable.CanUSe must be a function');
        }
    }
};

window.ConsumableInventory = class ConsumableInventory {
    #items;

    constructor(items = []) {
        this.#validate(items);
        this.#items = clone(items);
    }
    
    getAllItems() {
        return this.#items;
    }
    getItemByName(name) {
        return this.#items.find(i => i.item.getName() === name);
    }
    getIndexByName(name) {
        return this.#items.findIndex(i => i.item.getName() === name);
    }
    addItem(item, amount = 1) {
        if (!item instanceof ConsumableItem) {
            throw new Error(`ConsumableInventory.addItem failed: item must be an instance of ConsumableItem`);
        }

        const itemIndex = this.getIndexByName(item.getName());

        if (itemIndex === -1) {
            this.#items.push({
                item: clone(item),
                amount,
            });
        } else {
            this.#items[itemIndex].amount += amount;
        }
    }
    useItem(name) {
        const itemIndex = this.getIndexByName(name);

        if (itemIndex === -1) {
            throw new Error('ConsumableInventory.useItem() failed: The item was not found');
        }
        if (this.#items[itemIndex].amount <= 0) {
            this.#items.splice(itemIndex, 1);
            throw new Error('ConsumableInventory.useItem() failed: The item has 0 amount');
        }

        this.#items[itemIndex].item.consume();
        this.#items[itemIndex].amount--;

        if (this.#items[itemIndex].amount <= 0) {
            this.#items.splice(itemIndex, 1);
        }
    }

    _getData() {
        return {
            items: this.#items,
        };
    }
    static _fromObj(data) {
        return new this(
            data.items,
        );
    }

    #validate(items) {
        if (!Array.isArray(items)
            || !items.every(item => typeof item === 'object' && item.hasOwnProperty('amount') && typeof item.amount === 'number' && item.hasOwnProperty('item') && item.item instanceof ConsumableItem)
        ) {
            throw new Error(`ConsumableInventory.items must be an array of objects. Each object must have an [amount] property which is a number and an [item] property which is an instance of ConsumableItem`);
        }
    }
};

window.ConsumableVendor = class ConsumableVendor {
    #inventory;

    constructor(inventory = []) {
        this.#validate(inventory);
        this.#inventory = clone(inventory);
    }

    getInventory() {
        return this.#inventory;
    }
    getItemByName(name) {
        return this.#inventory.find(i => i.item.getName() === name);
    }
    getIndexByName(name) {
        return this.#inventory.findIndex(i => i.item.getName() === name);
    }
    addItem(item, price) {
        if (!item instanceof ConsumableItem) {
            throw new Error(`ConsumableVendor.addItem failed: item must be an instance of ConsumableItem`);
        }
        if (typeof price !== 'number') {
            throw new Error(`ConsumableVendor.addItem failed: price must be number`);
        }
        if (this.getIndexByName(item.getName()) > -1) {
            throw new Error(`ConsumableVendor.addItem failed: item already exists`);
        }

        this.#inventory.push({
            item: clone(item),
            price,
        });
    }
    buyItem(name) {
        if (typeof name !== 'string') {
            throw new Error(`ConsumableVendor.buyItemByName failed: name must be a string`);
        }

        const itemIndex = this.getIndexByName(name);

        if (itemIndex === -1) {
            throw new Error(`ConsumableVendor.buyItemByName failed: item with name "${name}" not present in the inventory`);
        }

        return clone(this.#inventory[itemIndex].item);
    }

    _getData() {
        return {
            inventory: this.#inventory,
        };
    }
    static _fromObj(data) {
        return new this(
            data.inventory,
        );
    }

    #validate(inventory) {
        if (!Array.isArray(inventory)
            || !inventory.every(i => typeof i === 'object' && i.hasOwnProperty('price') && typeof i.price === 'number' && i.hasOwnProperty('item') && i.item instanceof ConsumableItem)
        ) {
            throw new Error(`ConsumableVendor.inventory must be an array of objects. Each object must have an [price] property which is a number and an [item] property which is an instance of ConsumableItem`);
        }
    }
};

/* REQUIRED METHODS FOR SUGARCUBE */

ConsumableItem.prototype.clone = function () {
    const data = clone(this._getData());
    return ConsumableItem._fromObj(data);
};
ConsumableItem.prototype.toJSON = function () {
    const data = clone(this._getData());
    return JSON.reviveWrapper(`ConsumableItem._fromObj($ReviveData$)`, data);
};

ConsumableInventory.prototype.clone = function () {
    const data = clone(this._getData());
    return ConsumableInventory._fromObj(data);
};
ConsumableInventory.prototype.toJSON = function () {
    const data = clone(this._getData());
    return JSON.reviveWrapper(`ConsumableInventory._fromObj($ReviveData$)`, data);
};

ConsumableVendor.prototype.clone = function () {
    const data = clone(this._getData());
    return ConsumableVendor._fromObj(data);
};
ConsumableVendor.prototype.toJSON = function () {
    const data = clone(this._getData());
    return JSON.reviveWrapper(`ConsumableVendor._fromObj($ReviveData$)`, data);
};
