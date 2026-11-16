window.ACHIEVEMENTS_LEVEL_SCORE_MAPPER = {
    1: 3,
    2: 5,
    3: 10,
};

window.Achievement = class Achievement {
    #name;
    #description;
    #level;
    #granted;

    constructor(name, description, level, granted) {
        granted = granted || false;
        this.#validate(name, description, level, granted);
        this.#name = name;
        this.#description = description;
        this.#level = level;
        this.#granted = granted;
    }

    getName() {
        return this.#name;
    }
    getDescription() {
        return this.#description;
    }
    getLevel() {
        return this.#level;
    }
    isGranted() {
        return this.#granted;
    }
    grant() {
        this.#granted = true;
    }
    takeAway() {
        this.#granted = false;
    }

    _getData() {
        return {
            name: this.#name,
            description: this.#description,
            level: this.#level,
            granted: this.#granted,
        };
    }
    static _fromObj(data) {
        return new this(
            data.name,
            data.description,
            data.level,
            data.granted,
        );
    }

    #validate(name, description, level, granted) {
        if (typeof name !== 'string') {
            throw new Error('Achievement.name is invalid: Must be a string');
        }
        if (typeof description !== 'string') {
            throw new Error('Achievement.description is invalid: Must be a string');
        }
        if (typeof level !== 'number') {
            throw new Error('Achievement.level is invalid: Must be a number');
        }
        if (![1, 2, 3].includes(level)) {
            throw new Error('Achievement.level is invalid: Must be 1 or 2 or 3');
        }
        if (typeof granted !== 'boolean') {
            throw new Error('Achievement.granted is invalid: Must be a boolean');
        }
    }
};

window.AchievementInventory = class AchievementInventory {
    #achievements;
    #usedPoints;

    constructor(achievements, usedPoints) {
        achievements = achievements || [];
        usedPoints = usedPoints || 0;
        this.#validate(achievements, usedPoints);
        this.#achievements = achievements;
        this.#usedPoints = usedPoints;
    }

    getAchievements() {
        return this.#achievements;
    }
    getGrantedAchievements() {
        return this.#achievements.filter(ach => ach.isGranted());
    }
    addAchievement(achievement) {
        if (!(achievement instanceof Achievement)) {
            throw new Error('Error in AchievementInventory.addAchievement(): achievement must be an instance of Achievement');
        }

        this.#achievements.push(achievement);
    }
    getAchievementByName(name) {
        if (typeof name !== 'string') {
            throw new Error('Error in AchievementInventory.getChievementByName(): name must be a string');
        }

        return this.#achievements.find(ach => ach.getName() === name);
    }
    getAchievementGrantedCount() {
        return this.#achievements.filter(ach => ach.isGranted()).length;
    }
    getAchievementTotalCount() {
        return this.#achievements.length;
    }
    getAchievementScore() {
        return this.#achievements.reduce(
            (acc, cur) => acc + (cur.isGranted() ? ACHIEVEMENTS_LEVEL_SCORE_MAPPER[cur.getLevel()] : 0),
            0,
        );
    }
    getUsedPoints() {
        return this.#usedPoints;
    }
    getRemainingPoints() {
        return this.getAchievementScore() - this.getUsedPoints();
    }
    usePoints(points) {
        if (typeof points !== 'number' || points <= 0) {
            throw new Error('Error in AchievementInventory.usePoints(): points must be a number larger than zero');
        }
        if (points > this.getRemainingPoints()) {
            throw new Error('Error in AchievementInventory.usePoints(): points must be fewer or equal than remaining points');
        }

        this.#usedPoints += points;
    }

    _getData() {
        return {
            achievements: this.#achievements,
            usedPoints: this.#usedPoints,
        };
    }
    static _fromObj(data) {
        return new this(
            data.achievements,
            data.usedPoints,
        );
    }

    #validate(achievements, usedPoints) {
        if (!Array.isArray(achievements) || !achievements.every(ach => ach instanceof Achievement)) {
            throw new Error('AchievementInventory.achievements is invalid: Must be an array of instances of Achievement');
        }
        if (typeof usedPoints !== 'number') {
            throw new Error('AchievementInventory.usedPoints is invalid: Must be a number larger or equal to zero');
        }
    }
};

/* REQUIRED METHODS FOR SUGARCUBE */

Achievement.prototype.clone = function () {
    const data = clone(this._getData());
    return Achievement._fromObj(data);
};
Achievement.prototype.toJSON = function () {
    const data = clone(this._getData());
    return JSON.reviveWrapper(`Achievement._fromObj($ReviveData$)`, data);
};

AchievementInventory.prototype.clone = function () {
    const data = clone(this._getData());
    return AchievementInventory._fromObj(data);
};
AchievementInventory.prototype.toJSON = function () {
    const data = clone(this._getData());
    return JSON.reviveWrapper(`AchievementInventory._fromObj($ReviveData$)`, data);
};
