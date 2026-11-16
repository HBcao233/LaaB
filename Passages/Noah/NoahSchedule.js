    /* LATE NIGHT 0-5 */

NPC.register_block_LA(
    "Noah", 
    "ln", 
    "Sleeping",
    "any",
    "any",
    {
        "0000": "Noah Bedroom|Sleeping",
    }
);


    /* EARLY MORNING 5-7 */

NPC.register_block_LA(
    "Noah", 
    "em", 
    "Pre-School Morning",
    "weekday",
    "any",
    {
        "0500": "Noah Bedroom|Sleeping",
        "0640": "Home Hallway|Hallway PJ",
        "0645": "Home Kitchen|Breakfast",
    }
);
NPC.register_block_LA(
    "Noah", 
    "em", 
    "Morning Sleep In",
    "weekend",
    "any",
    {
        "0500": "Noah Bedroom|Sleeping",
    }
);

    /* LATE MORNING 7-10 */

NPC.register_block_LA(
    "Noah", 
    "lm", 
    "Pre-School Late Morning",
    "weekday",
    "any",
    {
        "0700": "Home Hallway|Hallway PJ",
        "0705": "Noah Bedroom|Changing",
        "0715": "Home Hallway|Hallway",
        "0720": "School|School",
    }
);
NPC.register_block_LA(
    "Noah", 
    "lm", 
    "Late Morning Cartoons",
    "weekend",
    "any",
    {
        "0700": "Noah Bedroom|Sleeping",
        "0800": "Home Hallway|Hallway PJ",
        "0805": "Home Kitchen|Breakfast",
        "0825": "Home Living Room|Watching Cartoons PJ",
        "0940": "Home Hallway|Hallway PJ",
        "0945": "Noah Bedroom|Changing",
    }
);

    /* NOON 10-12 */

NPC.register_block_LA(
    "Noah", 
    "no", 
    "School",
    "weekday",
    "any",
    {
        "1000": "School|School",
    }
);
NPC.register_block_LA(
    "Noah", 
    "no", 
    "Weekend Staying Home",
    "weekend",
    "any",
    {
        "1000": "Home Living Room|Watching Cartoons",
        "1130": "Home Hallway|Hallway",
        "1135": "Noah Bedroom|Playing in Room",
    }
);

/* EARLY AFTERNOON 12-15 */

NPC.register_block_LA(
    "Noah", 
    "ea", 
    "School",
    "weekday",
    "any",
    {
        "1200": "School|School",
    }
);
NPC.register_block_LA(
    "Noah", 
    "ea", 
    "Early Afternoon Staying Home",
    "weekend",
    "any",
    {
        "1200": "Home Kitchen|Lunch",
        "1220": "Home Living Room|Watching Cartoons",
        "1300": "Noah Bedroom|Reading in Room",
        "1400": "Home Hallway|Hallway",
        "1405": "Home Kitchen|Coloring",
    }
);

/* LATE AFTERNOON 15-19 */

NPC.register_block_LA(
    "Noah", 
    "la", 
    "After School Home",
    "weekday",
    "any",
    {
        "1500": "School|School",
        "1515": "Home Kitchen|Homework",
        "1545": "Home Kitchen|Drawing Kitchen",
        "1615": "Home Living Room|Watching Cartoons",
        "1700": "Home Kitchen|Dinner",
        "1720": "Home Hallway|Hallway Walking",
        "1725": "Noah Bedroom|Playing in Room",
        "1825": "Noah Bedroom|Reading in Room",
    }
);
NPC.register_block_LA(
    "Noah", 
    "la", 
    "After School Home Backyard",
    "weekday",
    "sunny",
    {
        "1500": "School|School",
        "1515": "Home Kitchen|Homework",
        "1545": "Home Kitchen|Drawing Kitchen",
        "1615": "Home Backyard|Playing in Backyard",
        "1700": "Home Kitchen|Dinner",
        "1720": "Home Backyard|Playing in Backyard",
        "1820": "Home Hallway|Hallway",
        "1825": "Noah Bedroom|Reading in Room",
    }
);
NPC.register_block_LA(
    "Noah", 
    "la", 
    "Weekend Home",
    "weekend",
    "any",
    {
        "1500": "Home Living Room|Watching Cartoons",
        "1545": "Home Kitchen|Drawing Kitchen",
        "1615": "Home Living Room|Watching Cartoons",
        "1700": "Home Kitchen|Dinner",
        "1720": "Home Hallway|Hallway Walking",
        "1725": "Noah Bedroom|Playing in Room",
        "1825": "Noah Bedroom|Reading in Room",
    }
);
NPC.register_block_LA(
    "Noah", 
    "la", 
    "Weekend Home Backyard",
    "weekend",
    "sunny",
    {
        "1500": "Home Living Room|Watching Cartoons",
        "1545": "Home Kitchen|Drawing Kitchen",
        "1615": "Home Backyard|Playing in Backyard",
        "1700": "Home Kitchen|Dinner",
        "1720": "Home Backyard|Playing in Backyard",
        "1820": "Home Hallway|Hallway",
        "1825": "Noah Bedroom|Reading in Room",
    }
);
NPC.register_block_LA(
    "Noah", 
    "la", 
    "After School Playground",
    "weekday",
    "sunny",
    {
        "1500": "School|School",
        "1515": "Home Kitchen|Homework",
        "1545": "Northend|Northend Walking",
        "1555": "Northend Playground|Play",
        "1700": "Home Kitchen|Dinner",
        "1720": "Home Backyard|Playing in Backyard",
        "1820": "Home Hallway|Hallway",
        "1825": "Noah Bedroom|Reading in Room",
    }
    );
    NPC.register_block_LA(
        "Noah", 
        "la", 
        "Weekend Playground",
        "weekend",
        "sunny",
        {
            "1500": "Northend|Northend Walking",
            "1510": "Northend Playground|Play",
            "1650": "Northend|Northend Walking",
            "1700": "Home Kitchen|Dinner",
            "1720": "Home Backyard|Playing in Backyard",
            "1820": "Home Hallway|Hallway",
            "1825": "Noah Bedroom|Reading in Room",
        }
    );

/* EVENING 19-21 */


NPC.register_block_LA(
    "Noah", 
    "ev", 
    "Late Night PJ Cartoons",
    "any",
    "any",
    {
        "1900": "Noah Bedroom|Playing in Room",
        "1930": "Home Bathroom|Bath",
        "1950": "Home Hallway|Hallway Towel",
        "1955": "Noah Bedroom|Changing",
        "2010": "Home Hallway|Hallway PJ",
        "2015": "Home Living Room|Watching Cartoons PJ",
    }
);

NPC.register_block_LA(
    "Noah", 
    "ev", 
    "Late Night Touching Self",
    "any",
    "any",
    {
        "1900": "Noah Bedroom|Playing in Room",
        "1930": "Home Bathroom|Bath",
        "1950": "Home Hallway|Hallway Towel",
        "1955": "Noah Bedroom|Touching Self",
        "2010": "Noah Bedroom|Changing",
        "2025": "Home Hallway|Hallway PJ",
        "2030": "Home Living Room|Watching Cartoons PJ",
    }
);


/* EARLY NIGHT 21-24 */

NPC.register_block_LA(
    "Noah", 
    "en", 
    "Normal Sleep Time",
    "any",
    "any",
    {
        "2100": "Noah Bedroom|Sleeping",
    }
);
