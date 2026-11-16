/* 
    This file defines Player Object to store in the Story variables 
    
    It is initialised like:
        
        <<set $Player to new Player({...})>>


    The atributes of the Player Object are accessed like:

        <<= $Player.Attribute >>


*/

/* Constructor */
window.Player = function (data) {
    /* the data can the legacy $Player object, a new Player object or a simple deserialized data */

    /* only get the object members */
    for (const key of Object.keys(data)) {
        if (!("get" in Object.getOwnPropertyDescriptor(data, key)) && !(typeof data[key] == "function")) {
            this[key] = clone(data[key]);
        }
    }

    /* Define the getters and setters for the needs */
    for (const type in this._needs) {
        Object.defineProperty(this, type, {
            get: function () { return setup.Needs.get(this._needs, type) },
            set: function (val) { return setup.Needs.set(this._needs, type, val) }
        });
    }
}

/* Mandatory for Sugarcube */
Player.prototype.clone = function () {
    return (new Player(this));
}

/* Mandatory for Sugarcube */
Player.prototype.toJSON = function () {
    let data = {};
    /* only get the object members */
    for (const key of Object.keys(this)) {
        if (!("get" in Object.getOwnPropertyDescriptor(this, key)) && !(typeof this[key] == "function")) {
            data[key] = clone(this[key]);
        }
    }
    return JSON.reviveWrapper('new Player($ReviveData$)', data);
}
