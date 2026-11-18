/* 
    This file defines LaaBTime Object to store in the Story variables 
    
    It is initialised like:
        
        <<set $Time to new LaaBTime('2020-08-10T06:30:00.000Z')>>

        Time has to be in UTC to avoid daylight saving shifts

    The atributes of the LaaBTime Object are accessed like:

        <<= $Time.Day >>
        <<= $Time.Date >>

    The methodes can be called like:

        <<= $Time.get_minute(") >>
        <<if $Time.schoolday() >>
        <<if $Time.between(7, 30, 8, 0) >>

        ## for all the (hour, minute) arguments:
        ## (hour) => equivalent to (hour, 0)
        ## (hour, null) => equivalent to (hour, 0)
        ## (null, minute) => equivalent to (current_hour, minute)

    Attributes:

        Minute:     Minutes of the current time as 2 digits string
        Hour:       Hours of the current time as 2 digits string
        Day:        Day of week as a string
        Date:       Day of the month as 2 digits string
        Month:      The month
        Year:       always 20XX string
        ToD:        Time of the Day (Night, Morning, Day, Afternoon)

    functions:

        add_minutes(minutes):       Add to time the number of minutes until the next top hour (included), return the non consumed minutes
        until(hour, minute):        Return the number of minutes need to reach such date. If the time is passed, will return the time until same hour next day

    conditionales:

        is(hour, minute):                                       Return True if Time is "<hour>:<minute>"
        before(hour, minute):                                   Return True if Time is before "<hour>:<minute>" not included
        after(hour, minute):                                    Return True if Time is after "<hour>:<minute>" included
        between(low_hour, low_minute, high_hour, high_minute):  Return True if Time is beween "]<low_hour>:<low_minute>, <high_hour>:<high_minute>]"
        night():                                                Return True if Time is "Night"
        morning():                                              Return True if Time is "Morning"
        day():                                                  Return True if Time is "Day"
        afternoon():                                            Return True if Time is "Afternoon"
        schoolday():                                            Return True if Time is not "Saturday" or "Sunday"

    examples:
        
        Here "$Time.is(7)" is true for time between 07h00 and 07h59 included. "$Time.is(7,14)" is True only at 07h14

            <<if $Time.is(7) or $Time.is(11) or $Time.is(15)>>
                <<if $Pained == 1>>
                    [[Ask for medicine (0:15)|School Infirmary Medicine]]<br>
                <</if>>
                    [[Ask to lay down (0:15)|School Infirmary Lay Down]]<br>
            <<else>>
                <span style="color:lightcoral">Dr. Bertrum can only let you rest before and after class or during your lunch hour.</span><br>
            <</if>>

        Here "$Time.before(6)" is true between 00h00 and 05h59 included. It is equivalent to "$Time.before(6,0)"
        Here "$Time.after(22)" is true between 22h00 and 23h59 included. It is equivalent to "$Time.after(22,0)"
        The difference between before and after is that before does not include the boudary while after does.

            <<if $Time.after(22) or $Time.before(6)>>
                <<if $NaturismSkill > 0>>
                    [[Press body against glass door (0:15)|PH Press Body Against Window]] <span style="color:green">+Fun</span><br>
                <</if>>
                [[Stick your penis in the fridge door (0:15)|PH Penis Fridge Door]] <span style="color:green">+Fun</span><br>
            <<else>>

        Here "$Time.between(6,0,8,0)" is true between 06h00 and 07h59 included. The first boudary is included the second is not. 

            <<if $Time.between(6,0,8,0)>>
                <<if $Breakfast != 1>>
                [[Eat Breakfast (0:15)|Breakfast]]<br>
                <</if>>
            <<elseif $Time.between(11,0,13,0)>>
                <<if $Lunch != 1>>
                [[Eat Lunch (0:15)|Lunch]]<br>
                <</if>>
            <<elseif $Time.between(17,0,19,0)>>
                <<if $Dinner != 1>>
                [[Eat Dinner (0:15)|Dinner]]<br>
                <</if>>
            <<elseif $Time.after(19) and $Dinner != 1>>
                [[Eat Dinner from Fridge (0:15)|Dinner]]<br>
            <</if>>

        Here "$Time.ToD" is the equivalent of the old $ToD

            <<if $Time.ToD == "Morning">>
                You peek out and are thankful that the streets are still mainly empty this early in the morning. Though you do hear the distant sound of talking and wonder if someone had spotted you from down the street. You turn towards your front door. 
            <<elseif $Time.ToD == "Day" or $Time.ToD == "Afternoon">>
                You peek your head out right as a jogger passes by, giving you a coy smile and laughing as they continue down the road. They definitely saw you! You completely hide yourself as you hear more cars and people pass by, hopefully unaware of your humiliating presence and glance nervously towards your front door.
                
            <<elseif $Time.ToD == "Night">>
                You peek out, but don’t see anyone in the darkness. Despite this, you still worry because the street light in front of your house would have illuminated you to anyone watching from the darkness. You gulp at the thought of the hidden dangers and look nervously towards your front door. 
            <</if>>

        Here "$Time.Day" is the equivalent of the old $Day

            <<if $Time.Day == "Tuesday" or $Time.Day == "Thursday">>
                <<set $GymClassType to "Swimming">>
            <<else>>
                <<set $GymClassType to "Gym">>
            <</if>>
*/

/* Constructor */
window.LaaBTime = function (start) {
    this.ts = new Date(start);

    /* Define the getters */
    Object.defineProperty(this, "Minute", { get: this.get_minute });
    Object.defineProperty(this, "Hour", { get: this.get_hour });
    Object.defineProperty(this, "Hour12", { get: this.get_hour_12 });
    Object.defineProperty(this, "AMPM", { get: this.get_am_pm });
    Object.defineProperty(this, "Day", { get: this.get_day });
    Object.defineProperty(this, "Date", { get: this.get_date });
    Object.defineProperty(this, "Month", { get: this.get_month });
    Object.defineProperty(this, "Year", { get: this.get_year });
    Object.defineProperty(this, "ToD", { get: this.get_time_of_day });
}

/* Mandatory for Sugarcube */
LaaBTime.prototype.clone = function () {
    return (new LaaBTime(this.ts));
}

/* Mandatory for Sugarcube */
LaaBTime.prototype.toJSON = function () {
    return JSON.reviveWrapper('new LaaBTime($ReviveData$)', this.ts.getTime());
}

/* Add 'minutes' minutes to the time, not meant for time advancement */
LaaBTime.prototype.add_minutes = function (minutes) {
    this.ts = new Date(this.ts.getTime() + 1000 * 60 * (minutes));
}

/* Add 'minutes' minutes to the time until the top hour, return the non consumed minutes */
LaaBTime.prototype.advance = function (minutes, ...decay_functions) {
    const left = Math.max(this.ts.getUTCMinutes() + minutes - 60, 0);
    this.ts = new Date(this.ts.getTime() + 1000 * 60 * (minutes - left));

    /* for decay and other passing minute sensitive functions */
    for (const decay_function of decay_functions) {
        decay_function(minutes - left);
    }

    return left;
}

/* return how many minutes are needed to get to this hour (potentially next day)*/
LaaBTime.prototype.until = function (hour, minute) {
    var future = new Date(this.ts);
    if (this.is(hour, minute)) {
        /* now */
        return 0;
    }
    if (this.after(hour, minute)) {
        /* tomorow */
        future.setUTCDate(this.ts.getUTCDate() + 1)
    }
    if (hour == null && minute != null) {
        future.setUTCMinutes(minute);
    }
    else if (hour != null && minute == null) {
        future.setUTCHours(hour, 0);
    }
    else if (hour != null && minute != null) {
        future.setUTCHours(hour, minute);
    }
    return (future.getTime() - this.ts.getTime()) / (60 * 1000);
}

/* functions to get printable values */

LaaBTime.prototype.get_minute = function () {
    return this.ts.getUTCMinutes().toLocaleString(undefined, { "minimumIntegerDigits": 2 });
}

LaaBTime.prototype.get_hour = function () {
    return this.ts.getUTCHours().toLocaleString(undefined, { "minimumIntegerDigits": 2 });
}

LaaBTime.prototype.get_hour_12 = function () {
    return ((this.ts.getUTCHours() - 1) % 12 + 1).toString();
}

LaaBTime.prototype.get_am_pm = function () {
    return this.ts.getUTCHours() < 12 ? "AM" : "PM";
}

LaaBTime.prototype.get_day = function () {
    const ds = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    return ds[this.ts.getUTCDay()];
}

LaaBTime.prototype.get_date = function () {
    return this.ts.getUTCDate().toLocaleString(undefined, { "minimumIntegerDigits": 2 });
}

LaaBTime.prototype.get_month = function () {
    const ms = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    return ms[this.ts.getUTCMonth()];
}

LaaBTime.prototype.get_year = function () {
    return "20XX";
}

LaaBTime.prototype.get_time_of_day = function () {
    if (this.night()) {
        return "Night";
    }
    else if (this.morning()) {
        return "Morning";
    }
    else if (this.day()) {
        return "Day";
    }
    else if (this.afternoon()) {
        return "Afternoon";
    }
    return "N/A"
}


/* comparison function to use in conditionals */

/* null is a wilcard */
LaaBTime.prototype.is = function (hour, minute) {
    if (hour == null && minute != null) {
        return this.ts.getUTCMinutes() == minute;
    }
    else if (hour != null && minute == null) {
        return this.ts.getUTCHours() == hour;
    }
    else if (hour != null && minute != null) {
        return this.ts.getUTCHours() == hour && this.ts.getUTCMinutes() == minute;
    }
    return true;
}

/* border non inclusive */
LaaBTime.prototype.before = function (hour, minute) {
    if (hour == null && minute != null) {
        return this.ts.getUTCMinutes() < minute;
    }
    else if (hour != null && minute == null) {
        return this.ts.getUTCHours() < hour;
    }
    else if (hour != null && minute != null) {
        return this.ts.getUTCHours() < hour || (this.ts.getUTCHours() == hour && this.ts.getUTCMinutes() < minute);
    }
    return true;
}

/* border inclusive */
LaaBTime.prototype.after = function (hour, minute) {
    if (hour == null && minute != null) {
        return minute <= this.ts.getUTCMinutes();
    }
    else if (hour != null && minute == null) {
        return hour <= this.ts.getUTCHours();
    }
    else if (hour != null && minute != null) {
        return hour < this.ts.getUTCHours() || (hour == this.ts.getUTCHours() && minute <= this.ts.getUTCMinutes());
    }
    return true;
}

/* lower border inclusive and upper border non inclusive */
LaaBTime.prototype.between = function (low_hour, low_minute, high_hour, high_minute) {
    return this.after(low_hour, low_minute) && this.before(high_hour, high_minute);
}

LaaBTime.prototype.night = function () {
    return this.before(6) || this.after(20);
}

LaaBTime.prototype.morning = function () {
    return this.between(6, 0, 11, 0);
}

LaaBTime.prototype.day = function () {
    return this.between(11, 0, 16, 0);
}

LaaBTime.prototype.afternoon = function () {
    return this.between(16, 0, 20, 0);
}

LaaBTime.prototype.schoolday = function () {
    return !["Saturday", "Sunday"].includes(this.get_day());
}

/* Get amount of days since the start of the game (in-game days) */
LaaBTime.prototype.daysSinceStart = function () {
    const diff = Math.abs(new Date("2020-08-10T06:30:00.000Z") - this.ts)
        / (1000 * 60 * 60 * 24);

    return Math.ceil(diff);
}
