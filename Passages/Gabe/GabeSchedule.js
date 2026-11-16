    /* LATE NIGHT 0-5 */
    NPC.register_block_LA(
        "Gabe", 
        "ln", 
        "Sleeping",
        "any",
        "any",
        {
            "0000": "Gabe Bedroom|Sleeping",
        }
    );
    
    /* EARLY MORNING 5-7 */
    NPC.register_block_LA(
        "Gabe", 
        "em", 
        "Pre-School Morning",
        "weekday",
        "any",
        {
            "0500": "Gabe Bedroom|Sleeping",
            "0630": "Home Hallway|Hallway PJ",
            "0635": "Home Kitchen|Breakfast",
            "0655": "Home Bathroom|Showering",
        }
    );
    NPC.register_block_LA(
        "Gabe", 
        "em", 
        "Morning Sleep In",
        "weekend",
        "any",
        {
            "0500": "Gabe Bedroom|Sleeping",
        }
    );
    
    /* LATE MORNING 7-10 */
    NPC.register_block_LA(
        "Gabe", 
        "lm", 
        "Pre-School Late Morning",
        "weekday",
        "any",
        {
            "0700": "Home Bathroom|Showering",
            "0710": "Home Hallway|Hallway Towel",
            "0715": "Gabe Bedroom|Changing",
            "0730": "Home Hallway|Hallway",
            "0735": "School|School",
        }
    );
    NPC.register_block_LA(
        "Gabe", 
        "lm", 
        "Sleeping In",
        "weekend",
        "any",
        {
            "0700": "Gabe Bedroom|Sleeping",
            "0840": "Home Hallway|Hallway PJ",
            "0845": "Home Kitchen|Breakfast",
            "0900": "Home Living Room|TV PJ",
            "0930": "Home Bathroom|Showering",
            "0945": "Home Hallway|Hallway Towel",
            "0950": "Gabe Bedroom|Changing",
        }
    );
    
    /* NOON 10-12 */
    NPC.register_block_LA(
        "Gabe", 
        "no", 
        "School",
        "weekday",
        "any",
        {
            "1000": "School|School",
        }
    );
    NPC.register_block_LA(
        "Gabe", 
        "no", 
        "Lazy Computer Morning",
        "weekend",
        "any",
        {
            "1000": "Gabe Bedroom|Computer Games",
        }
    );
    
    /* EARLY AFTERNOON 12-15 */
    NPC.register_block_LA(
        "Gabe", 
        "ea", 
        "School",
        "weekday",
        "any",
        {
            "1200": "School|School",
        }
    );
    NPC.register_block_LA(
        "Gabe", 
        "ea", 
        "Weekend Work Out",
        "weekend",
        "any",
        {
            "1200": "Home Hallway|Hallway",
            "1205": "Home Kitchen|Lunch",
            "1225": "Home Hallway|Hallway",
            "1230": "Gabe Bedroom|Lifting",
            "1330": "Home Hallway|Hallway",
            "1335": "Home Living Room|TV",
        }
    );
    
    /* LATE AFTERNOON 15-19 */
    NPC.register_block_LA(
        "Gabe", 
        "la", 
        "After School Home",
        "weekday",
        "any",
        {
            "1500": "School|School",
            "1530": "Gabe Bedroom|Homework Computer",
            "1600": "Gabe Bedroom|Lifting",
            "1640": "Home Hallway|Hallway",
            "1645": "Home Kitchen|Texting Kitchen",
            "1710": "Home Kitchen|Dinner",
            "1730": "Home Living Room|TV",
            "1830": "Home Hallway|Hallway",
            "1835": "Gabe Bedroom|Computer Games",
        }
    );
    NPC.register_block_LA(
        "Gabe", 
        "la", 
        "Afternoon TV",
        "weekend",
        "any",
        {
            "1500": "Home Living Room|TV",
            "1630": "Home Hallway|Hallway",
            "1635": "Gabe Bedroom|Computer Games",
            "1800": "Home Hallway|Hallway",
            "1805": "Home Living Room|TV",
        }
    );
    
    /* EVENING 19-21 */
    NPC.register_block_LA(
        "Gabe", 
        "ev", 
        "Fun Time in Room",
        "any",
        "any",
        {
            "1900": "Gabe Bedroom|Changing",
            "1915": "Gabe Bedroom|Computer Games PJ",
            "2030": "Gabe Bedroom|Porn Room",
        }
    );
    
    /* EARLY NIGHT 21-24 */
    NPC.register_block_LA(
        "Gabe", 
        "en", 
        "Normal Sleep Time",
        "any",
        "any",
        {
            "2100": "Gabe Bedroom|Texting Bedroom PJ",
            "2130": "Gabe Bedroom|Sleeping",
        }
    );
    