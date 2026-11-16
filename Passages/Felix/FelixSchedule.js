    /* LATE NIGHT 0-5 */
    NPC.register_block_LA(
        "Felix", 
        "ln", 
        "Home",
        "any",
        "any",
        {
            "0000": "Felix Home|Home",
        }
    );
    
    /* EARLY MORNING 5-7 */
    NPC.register_block_LA(
        "Felix", 
        "em", 
        "Home",
        "any",
        "any",
        {
            "0500": "Felix Home|Home",
        }
    );

    /* LATE MORNING 7-10 */
    NPC.register_block_LA(
        "Felix", 
        "lm", 
        "Pre-School Playground",
        "weekday",
        "sunny",
        {
            "0700": "Felix Home|Home",
            "0720": "Felix Home|Waiting for Bus",
            "0730": "School Courtyard|School Playground",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Math Classroom|Math",
            "0850": "School East Hallway|School Hallway",
            "0900": "School English Classroom|English",
            "0950": "School West Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Felix", 
        "lm", 
        "Pre-School Cafeteria",
        "weekday",
        "any",
        {
            "0700": "Felix Home|Home",
            "0720": "Felix Home|Waiting for Bus",
            "0730": "School Cafeteria|Cafeteria",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Math Classroom|Math",
            "0850": "School East Hallway|School Hallway",
            "0900": "School English Classroom|English",
            "0950": "School West Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Felix", 
        "lm", 
        "Home",
        "weekend",
        "any",
        {
            "0700": "Felix Home|Home",
        }
    );
    
    /* NOON 10-12 */
    NPC.register_block_LA(
        "Felix", 
        "no", 
        "School Lunch Outside",
        "weekday",
        "sunny",
        {
            "1000": "School Music Room|Music",
            "1050": "School South Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Courtyard|School Playground",
            "1155": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Felix", 
        "no", 
        "School Lunch Cafeteria",
        "weekday",
        "any",
        {
            "1000": "School Music Room|Music",
            "1050": "School South Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Cafeteria|Cafeteria",
            "1155": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Felix", 
        "no", 
        "Home",
        "weekend",
        "any",
        {
            "1000": "Felix Home|Home",
        }
    );
    
    /* EARLY AFTERNOON 12-15 */
    NPC.register_block_LA(
        "Felix", 
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
        "Felix", 
        "ea", 
        "Home",
        "weekend",
        "any",
        {
            "1200": "Felix Home|Home",
        }
    );
    
    /* LATE AFTERNOON 15-19 */
    NPC.register_block_LA(
        "Felix", 
        "la", 
        "After School Basic",
        "weekday",
        "any",
        {
            "1500": "Middle School|School Waiting for Bus",
            "1505": "Felix Home|Home",
        }
    );
    NPC.register_block_LA(
        "Felix", 
        "la", 
        "Home",
        "weekend",
        "any",
        {
            "1500": "Felix Home|Home",
        }
    );
    
    /* EVENING 19-21 */
    NPC.register_block_LA(
        "Felix", 
        "ev", 
        "Home",
        "any",
        "any",
        {
            "1900": "Felix Home|Home",
        }
    );
    
    /* EARLY NIGHT 21-24 */
    NPC.register_block_LA(
        "Felix", 
        "en", 
        "Home",
        "any",
        "any",
        {
            "2100": "Felix Home|Home",
        }
    );
