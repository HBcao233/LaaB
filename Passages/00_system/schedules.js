/* 
    This file define the store for schedules and diverse utlity functions for schedule manipulation 
*/

/* Schedule database object */
setup.schedules = {

    /* must be ordered properly */
    periods: {
        ln: "0000",
        em: "0500",
        lm: "0700",
        no: "1000",
        ea: "1200",
        la: "1500",
        ev: "1900",
        en: "2100",
    },

    /* root of the schedules store */
    schedule_db: {},

    /* root of the routes store */
    route_db: {},
};

/* output the current time in "hhmm" format */
setup.schedules.current_time = function () {
    const time = State.getVar("$Time");
    return time.get_hour() + time.get_minute()
};

/* output the period base on current time */
setup.schedules.current_period = function () {
    let ct = this.current_time();
    for (const period of Object.keys(this.periods).reverse()) {
        if (ct.localeCompare(this.periods[period]) >= 0) {
            return period;
        }
    }
    return undefined;
};

/* output the past periods based on current time */
setup.schedules.current_periods = function () {
    let ct = this.current_time();
    let results = [];
    for (const period of Object.keys(this.periods).reverse()) {
        if (ct.localeCompare(this.periods[period]) >= 0) {
            results.push(period);
        }
    }
    return results;
};

/* output a shuffled block list of the owner schedules blocks */
setup.schedules.shuffle = function (owner, tags, excludeTags = []) {
    let results = {};
    for (let period in this.periods) {
        results[period] = either(this.search(owner, period, tags, excludeTags));
    }
    return results
};

/* function to search all the blocks from and owner and period fitting all the tags and excluding any tags in excludeTags */
setup.schedules.search = function (owner, period, tags, excludeTags = []) {
    tags = tags.map(s => s.toLowerCase());
    let results = [];
    for (let id in this.schedule_db[owner][period]) {
        const blockTags = this.schedule_db[owner][period][id]["tags"];
        if (blockTags.includesAll(tags) && !blockTags.includesAny(excludeTags)) {
            results.push(id);
        }
    }
    return results;
};

/* Get the current schedule value from a block and type */
setup.schedules.get = function (owner, period, id, st) {
    let ct = this.current_time();
    let sch = this.schedule_db[owner][period][id][st];
    for (const t of Object.keys(sch).sort().reverse()) {
        if (ct.localeCompare(t) >= 0) {
            return sch[t];
        }
    }
    /* if we arrive here means we need to look into the previous block */
    return undefined;
};



