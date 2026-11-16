    /* LATE NIGHT 0-5 */
    NPC.register_block_LA(
        "Xavier", 
        "ln", 
        "Home",
        "any",
        "any",
        {
            "0000": "Xavier Home|Home",
        }
    );
    
    /* EARLY MORNING 5-7 */
    NPC.register_block_LA(
        "Xavier", 
        "em", 
        "Home",
        "any",
        "any",
        {
            "0500": "Xavier Home|Home",
        }
    );

    /* LATE MORNING 7-10 */
    NPC.register_block_LA(
        "Xavier", 
        "lm", 
        "Pre-School Playground",
        "weekday",
        "sunny",
        {
            "0700": "Xavier Home|Home",
            "0720": "Xavier Home|Waiting for Bus",
            "0730": "School Courtyard|School Playground",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Math Classroom|Math",
            "0850": "School West Hallway|School Hallway",
            "0900": "School English Classroom|English",
            "0950": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Xavier", 
        "lm", 
        "Pre-School Cafeteria",
        "weekday",
        "any",
        {
            "0700": "Xavier Home|Home",
            "0720": "Xavier Home|Waiting for Bus",
            "0730": "School Cafeteria|Cafeteria",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Math Classroom|Math",
            "0850": "School West Hallway|School Hallway",
            "0900": "School English Classroom|English",
            "0950": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Xavier", 
        "lm", 
        "Home",
        "weekend",
        "any",
        {
            "0700": "Xavier Home|Home",
        }
    );
    
    /* NOON 10-12 */
    NPC.register_block_LA(
        "Xavier", 
        "no", 
        "School Lunch Outside",
        "weekday",
        "sunny",
        {
            "1000": "School Computer Room|Computer Class",
            "1050": "School South Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Courtyard|School Playground",
            "1155": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Xavier", 
        "no", 
        "School Lunch Cafeteria",
        "weekday",
        "any",
        {
            "1000": "School Computer Room|Computer Class",
            "1050": "School South Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Cafeteria|Cafeteria",
            "1155": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Xavier", 
        "no", 
        "Home",
        "weekend",
        "any",
        {
            "1000": "Xavier Home|Home",
        }
    );
    
    /* EARLY AFTERNOON 12-15 */
    NPC.register_block_LA(
        "Xavier", 
        "ea", 
        "School",
        "weekday",
        "any",
        {
            "1200": "School Science Classroom|Science",
            "1250": "School East Hallway|School Hallway",
            "1300": "School History Classroom|History",
            "1350": "School East Hallway|School Hallway",
            "1354": "School Locker Room|Gym",
            "1455": "School Locker Room|Gym Shower",
        }
    );
    NPC.register_block_LA(
        "Xavier", 
        "ea", 
        "Home",
        "weekend",
        "any",
        {
            "1200": "Xavier Home|Home",
        }
    );
    
    /* LATE AFTERNOON 15-19 */
    NPC.register_block_LA(
        "Xavier", 
        "la", 
        "After School Basic",
        "weekday",
        "any",
        {
            "1500": "Middle School|School Waiting for Bus",
            "1505": "Xavier Home|Home",
        }
    );
    NPC.register_block_LA(
        "Xavier", 
        "la", 
        "Home",
        "weekend",
        "any",
        {
            "1500": "Xavier Home|Home",
        }
    );
    
    /* EVENING 19-21 */
    NPC.register_block_LA(
        "Xavier", 
        "ev", 
        "Home",
        "any",
        "any",
        {
            "1900": "Xavier Home|Home",
        }
    );
    
    /* EARLY NIGHT 21-24 */
    NPC.register_block_LA(
        "Xavier", 
        "en", 
        "Home",
        "any",
        "any",
        {
            "2100": "Xavier Home|Home",
        }
    );
