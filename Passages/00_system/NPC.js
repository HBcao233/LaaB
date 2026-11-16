/* 
    This file defines NPC Object to store in the Story variables 
    
    It is initialised like:
        
        <<set $Lucas to new NPC({ID: "Lucas"})>>

        More atributes than "ID" can be given, but ID is mandatory

    The atributes of the NPC Object are accessed like:

        <<= $Lucas.ID >>
        <<= $Lucas.Activity >> (shortcut for $Lucas.get_from_schedule("Activity"))
        <<= $Lucas.Location >> (shortcut for $Lucas.get_from_schedule("Location"))

    The methodes can be called like:

        <<= $Lucas.get_from_schedule("Activity") >>
        <<run $Lucas.update_schedules(_tags) >>

    Attributes:

        ID:                     Id of the NPC, must be unique
        Location:               shortcut for get_from_schedule("Location")
        Activity:               shortcut for get_from_schedule("Activity")
        Current_block:          shortcut for get_current_block()
        get_from_schedule(st):  function to get the current value of a given (st) schedule type for this NPC
        shuffle_schedules(tags):function to shuffle the NPC schedules blocks depending on the given tags
        swap_block(period, id): function to swap the NPC given period schedule block by the one given (id)
        apply_route(id):        function to apply the given special route to the NPC schedule blocks

    Static function:

        NPC.register_block_LA(owner, period, id, day_tags, weather_tags, schedule):
            
            register an individual schedule block.

            owner:          ID of the NPC
            period:         one of the periods defined in schedules.js
            id:             id of the block itself, must be unique within the owner and period
            day_tags:       comma separated list of Days or day alias (weekday, weekend)
            weather_tags:   comma separated list of weathers (sunny, rainy, stormy)
            schedule:       the schedule itself as an Object with members "hhmm": "<Location>|<Activity>"

            Ex:
                NPC.register_block_LA(
                    "Lucas", 
                    "lm", 
                    "school",
                    "weekday",
                    "sunny",
                    {
                        "0700": "Northend|Waiting for schoolbus",
                        "0740": "South Hallway|Walking",
                        "0745": "School Playground|Resting",
                        "0800": "Science Classroom|Attending class",
                        "0900": "English Classroom|Attending class",
                    }
                );

        NPC.register_route(owner, id, route):
            
            register a special route used to overwrite some blocks in day schedule with the function $<NPC>.apply_route(id).

            id:             ID of the route

            Ex:
                NPC.register_route(
                    "Lucas", 
                    "late at school and detention",
                    {
                        em: "overslept",
                        lm: "overslept",
                        la: "detention",
                    },
                );
*/

/* Constructor */
window.NPC = function (data) {
    this.ID = "Random";
    this.blocks = {};
    this.groups = ["all"];

    /* update the object member*/
    for (const key in data) {
        this[key] = clone(data[key]);
    }

    /* Define the getters */
    Object.defineProperty(this, "Location", { get: function () { return this.get_from_schedule("Location") } });
    Object.defineProperty(this, "Activity", { get: function () { return this.get_from_schedule("Activity") } });
    Object.defineProperty(this, "Current_block", { get: function () { return this.get_current_block() } });

    /* register the NPC in the "directory" */
    NPC.register(this);
}

/* Mandatory for Sugarcube */
NPC.prototype.clone = function () {
    let data = {};
    /* only get the object members */
    for (const key of Object.keys(this)) {
        if (!("get" in Object.getOwnPropertyDescriptor(this, key)) && !(typeof this[key] == "function")) {
            data[key] = clone(this[key]);
        }
    }
    return (new NPC(data));
}

/* Mandatory for Sugarcube */
NPC.prototype.toJSON = function () {
    let data = {};
    /* only get the object members */
    for (const key of Object.keys(this)) {
        if (!("get" in Object.getOwnPropertyDescriptor(this, key)) && !(typeof this[key] == "function")) {
            data[key] = clone(this[key]);
        }
    }
    return JSON.reviveWrapper('new NPC($ReviveData$)', data);
}

NPC.prototype.shuffle_schedules = function (tags, excludeTags = []) {
    this.blocks = setup.schedules.shuffle(this.ID, tags, excludeTags);
}

NPC.prototype.get_current_block = function () {
    return this.blocks[setup.schedules.current_period()];
}

NPC.prototype.get_from_schedule = function (st) {
    let periods = setup.schedules.current_periods();
    for (let period of periods) {
        let id = this.blocks[period]
        let result = setup.schedules.get(this.ID, period, id, st);
        if (result) {
            return result;
        }
    }
    return undefined;
}

NPC.prototype.swap_block = function (period, id) {
    if (period in setup.schedules.periods) {
        if (id in setup.schedules.schedule_db[this.ID][period]) {
            this.blocks[period] = id
        } else {
            alert(`${this.ID}.swap_block(${period}, ${id}) invalid id`);
        }
    } else {
        alert(`${this.ID}.swap_block(${period}, ${id}) invalid period`);
    }
}

NPC.prototype.apply_route = function (route_id) {
    if (route_id in setup.schedules.route_db[this.ID]) {
        let route = setup.schedules.route_db[this.ID][route_id];
        for (let period in route) {
            this.blocks[period] = route[period];
        }
    } else {
        alert(`${this.ID}.apply_route(${route_id}) invalid id`);
    }
}


/* register NPC Location and Activity */
NPC.register_block_LA = function (owner, period, id, day_tags, weather_tags, schedule) {
    /* some checks */
    if (!(period in setup.schedules.periods)) {
        alert(`register_block_LA(${owner},${period},${id},... invalid period`);
    }

    let tags = [];
    /* day tags alias */
    for (let tag of day_tags.split(",")) {
        tag = tag.trim().toLowerCase();
        if (tag == "weekday") {
            tags = tags.concat(["monday", "tuesday", "wednesday", "thursday", "friday"]);
        } else if (tag == "weekend") {
            tags = tags.concat(["saturday", "sunday"]);
        } else if (tag == "any") {
            tags = tags.concat(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]);
        } else {
            tags.push(tag)
        }
    }
    /* weather tags alias */
    for (let tag of weather_tags.split(",")) {
        tag = tag.trim().toLowerCase();
        if (tag == "any") {
            tags = tags.concat(["sunny", "rainy", "stormy"]);
        } else {
            tags.push(tag);
        }
    }

    /* split schedules */
    const activity = {};
    const location = {};
    for (let key in schedule) {
        let data = schedule[key].split("|");
        if (data.length != 2) {
            alert(`schedule ${id} for period ${period} of ${owner} bad data for line ${key}`);
        }
        location[key] = data[0];
        activity[key] = data[1];
    }

    /* init the owner if not done */
    if (!(owner in setup.schedules.schedule_db)) {
        setup.schedules.schedule_db[owner] = {};
    }

    /* init the period if not done */
    if (!(period in setup.schedules.schedule_db[owner])) {
        setup.schedules.schedule_db[owner][period] = {};
    }

    if (id in setup.schedules.schedule_db[owner][period]) {
        alert(`ABCredefinition of schedule ${id} for period ${period} of NPC ${owner}`);
    }
    else {
        setup.schedules.schedule_db[owner][period][id] = {
            tags: tags,
            Location: location,
            Activity: activity,
        };
    }
}

/* register NPC special routes */
NPC.register_route = function (owner, id, route) {
    /* init the owner if not done */
    if (!(owner in setup.schedules.route_db)) {
        setup.schedules.route_db[owner] = {};
    }

    if (id in setup.schedules.route_db[owner]) {
        alert(`EFGredefinition of route ${id} of NPC ${owner}`);
    }
    else {
        setup.schedules.route_db[owner][id] = route
    }
}

NPC.db = {};

NPC.register = function (npc) {
    const close = function (g) {
        return function () {
            return Object.values(NPC.db[g]);
        }
    }
    for (const group of npc.groups) {
        if (!(group in NPC.db)) {
            NPC.db[group] = {};
        }
        NPC.db[group][npc.ID] = npc;
        NPC[group] = close(group);
    }
}

