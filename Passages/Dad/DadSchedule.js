    /* LATE NIGHT 0-5 */
    NPC.register_block_LA(
        "Dad", 
        "ln", 
        "Sleeping",
        "any",
        "any",
        {
            "0000": "Dad Bedroom|Sleeping",
        }
    );
    
    /* EARLY MORNING 5-7 */
    NPC.register_block_LA(
        "Dad", 
        "em", 
        "Pre-Work Morning",
        "weekday",
        "any",
        {
            "0500": "Dad Bedroom|Sleeping",
            "0600": "Dad Bathroom|Showering",
            "0615": "Dad Bedroom|Changing",
            "0630": "Home Hallway|Hallway",
            "0635": "Home Kitchen|Breakfast",
            "0650": "Home Kitchen|Reading News",
        }
    );
    NPC.register_block_LA(
        "Dad", 
        "em", 
        "Weekend Slight Sleep=In",
        "weekend",
        "any",
        {
            "0500": "Dad Bedroom|Sleeping",
            "0630": "Dad Bathroom|Showering",
            "0645": "Dad Bedroom|Changing",
        }
    );

    /* LATE MORNING 7-10 */
    NPC.register_block_LA(
        "Dad", 
        "lm", 
        "Work",
        "weekday",
        "any",
        {
            "0700": "Work|Work",
        }
    );
    NPC.register_block_LA(
        "Dad", 
        "lm", 
        "Morning Clean",
        "weekend",
        "any",
        {
            "0700": "Home Hallway|Hallway",
            "0705": "Home Kitchen|Breakfast",
            "0730": "Home Kitchen|Reading News",
            "0755": "Home Hallway|Hallway",
            "0800": "Dad Bedroom|Cleaning Room",
            "0900": "Home Hallway|Hallway",
            "0905": "Home Living Room|TV",
        }
    );
    
    /* NOON 10-12 */
    NPC.register_block_LA(
        "Dad", 
        "no", 
        "Work",
        "weekday",
        "any",
        {
            "1000": "Work|Work",
        }
    );
    NPC.register_block_LA(
        "Dad", 
        "no", 
        "Weekend Movie",
        "weekend",
        "any",
        {
            "1000": "Dad Bedroom|Watching Film",
        }
    );
    
    /* EARLY AFTERNOON 12-15 */
    NPC.register_block_LA(
        "Dad", 
        "ea", 
        "Work",
        "weekday",
        "any",
        {
            "1200": "Work|Work",
        }
    );
    NPC.register_block_LA(
        "Dad", 
        "ea", 
        "Weekend Work Computer",
        "weekend",
        "any",
        {
            "1200": "Home Kitchen|Lunch",
            "1225": "Home Living Room|TV",
            "1330": "Home Hallway|Hallway",
            "1335": "Dad Bedroom|Work Computer",
        }
    );
    
    /* LATE AFTERNOON 15-19 */
    NPC.register_block_LA(
        "Dad", 
        "la", 
        "After Work Home",
        "weekday",
        "any",
        {
            "1500": "Work|Work",
            "1630": "Home Kitchen|Cooking Dinner",
            "1700": "Home Kitchen|Dinner",
            "1720": "Home Kitchen|Dishes",
            "1730": "Home Living Room|TV",
            "1800": "Home Hallway|Hallway",
            "1805": "Dad Bedroom|Cleaning Room",
        }
    );
    NPC.register_block_LA(
        "Dad", 
        "la", 
        "Cook Dinner and Film",
        "weekend",
        "any",
        {
            "1500": "Home Living Room|TV",
            "1630": "Home Kitchen|Cooking Dinner",
            "1700": "Home Kitchen|Dinner",
            "1720": "Home Kitchen|Dishes",
            "1730": "Home Hallway|Hallway",
            "1735": "Dad Bedroom|Watching Film",
        }
    );
    
    /* EVENING 19-21 */
    NPC.register_block_LA(
        "Dad", 
        "ev", 
        "Late Night Work",
        "any",
        "any",
        {
            "2000": "Dad Bedroom|Work Computer",
        }
    );
    
    /* EARLY NIGHT 21-24 */
    NPC.register_block_LA(
        "Dad", 
        "en", 
        "Normal Sleep Time",
        "any",
        "any",
        {
            "2150": "Dad Bedroom|Changing",
            "2200": "Dad Bedroom|Sleeping",
        }
    );
