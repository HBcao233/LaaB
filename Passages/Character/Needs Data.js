setup.Needs = {};

setup.Needs.Consts = {
    SleepingEnergyDR: [-100, -9, -9, -14],
    NormalEnergyDR: [-100, 2, 3, 5],
    SleepingHungerDR: [-100, 1, 2, 3],
    NormalHungerDR: [-100, 2, 5, 8],
    SleepingHygieneDR: [-100, 1, 2, 3],
    NormalHygieneDR: [-100, 2, 4, 6],
    SleepingFunDR: [-100, 1, 3, 5],
    NormalFunDR: [-100, 2, 3, 7],
    SmallBladderDR: [-100, 3, 8, 10],
    NormalBladderDR: [-100, 2, 5, 7],
};

setup.Needs.get = function (data, type) {
    if (!(type in data)) {
        alert(`Needs type ${type} is unknown`);
    }
    return data[type];
}

setup.Needs.set = function (data, type, newval) {
    if (newval < setup.Needs[type].min()) {
        /* lower boundary */
        data[type] = setup.Needs[type].min();
    } else if (newval > setup.Needs[type].max()) {
        /* upper boundary */
        data[type] = setup.Needs[type].max();
    } else {
        data[type] = newval;
    }
}

setup.Needs.decay = function (minutes) {
    if (minutes) {
        let vars = variables();
        const data = vars["Player"]["_needs"];
        for (const [type, value] of Object.entries(data)) {
            if (!(type in setup.Needs)) {
                alert(`Needs type ${type} is unknown`);
            } else if (type == "Bladder" && vars["ToggleBladder"]) {
                let newval = value - minutes * (setup.Needs["Bladder"].dr() / 60.0);
                while (newval <= 5) {
                    newval += setup.Needs["Bladder"].max();
                    vars["HadAccident"] += 1;
                }
                setup.Needs.set(data, "Bladder", newval);
            } else {
                setup.Needs.set(data, type, value - minutes * (setup.Needs[type].dr() / 60.0));
            }
        }
    }
}

setup.Needs.Energy = {
    dr: () => {
        const vars = variables();
        if (vars.Sleeping) {
            return setup.Needs.Consts.SleepingEnergyDR[vars.NeedDifficulty];
        } else {
            return setup.Needs.Consts.NormalEnergyDR[vars.NeedDifficulty];
        }
    },
    max: () => { return 100 },
    min: () => { return 0 },
};

setup.Needs.Hunger = {
    dr: () => {
        const vars = variables();
        let mult = 1;
        if (vars.Player.Traits.includes("Glutton")) {
            mult = 1.5;
        }
        else if (vars.Player.Traits.includes("LightEater")) {
            mult = 0.75;
        }
        if (vars.Sleeping) {
            return setup.Needs.Consts.SleepingHungerDR[vars.NeedDifficulty] * mult;
        } else {
            return setup.Needs.Consts.NormalHungerDR[vars.NeedDifficulty] * mult;
        }
    },
    max: () => { return 100 },
    min: () => { return 0 },
};

setup.Needs.Hygiene = {
    dr: () => {
        const vars = variables();
        let mult = 1;
        if (vars.Player.Traits.includes("Neat")) {
            mult = 0.75;
        }
        if (vars.Sleeping) {
            return setup.Needs.Consts.SleepingHygieneDR[vars.NeedDifficulty] * mult;
        } else {
            return setup.Needs.Consts.NormalHygieneDR[vars.NeedDifficulty] * mult;
        }
    },
    max: () => { return 100 },
    min: () => { return 0 },
};

setup.Needs.Fun = {
    dr: () => {
        const vars = variables();
        if (vars.Sleeping) {
            return setup.Needs.Consts.SleepingFunDR[vars.NeedDifficulty];
        } else {
            return setup.Needs.Consts.NormalFunDR[vars.NeedDifficulty];
        }
    },
    max: () => { return 100 },
    min: () => { return 0 },
};

setup.Needs.Bladder = {
    dr: () => {
        const vars = variables();
        if (vars.ToggleBladder == 0) {
            return 0;
        } else if (vars.Player.Traits.includes("Small Bladder")) {
            return setup.Needs.Consts.SmallBladderDR[vars.NeedDifficulty];
        } else {
            return setup.Needs.Consts.NormalBladderDR[vars.NeedDifficulty];
        }
    },
    max: () => { return 100 },
    min: () => { return 0 },
};
