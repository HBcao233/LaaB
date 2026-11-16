    /* LATE NIGHT 0-5 */
    NPC.register_block_LA(
        "Michael", 
        "ln", 
        "Home",
        "any",
        "any",
        {
            "0000": "Michael Home|Home",
        }
    );
    
    /* EARLY MORNING 5-7 */
    NPC.register_block_LA(
        "Michael", 
        "em", 
        "Home",
        "any",
        "any",
        {
            "0500": "Michael Home|Home",
        }
    );

    /* LATE MORNING 7-10 */
    NPC.register_block_LA(
        "Michael", 
        "lm", 
        "Pre-School Playground",
        "weekday",
        "sunny",
        {
            "0700": "Michael Home|Home",
            "0720": "Michael Home|Waiting for Bus",
            "0730": "School Courtyard|School Playground",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Math Classroom|Math",
            "0850": "School East Hallway|School Hallway",
            "0900": "School History Classroom|History",
            "0950": "School West Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Michael", 
        "lm", 
        "Pre-School Cafeteria",
        "weekday",
        "any",
        {
            "0700": "Michael Home|Home",
            "0720": "Michael Home|Waiting for Bus",
            "0730": "School Cafeteria|Cafeteria",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Math Classroom|Math",
            "0850": "School East Hallway|School Hallway",
            "0900": "School History Classroom|History",
            "0950": "School West Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Michael", 
        "lm", 
        "Home",
        "weekend",
        "any",
        {
            "0700": "Michael Home|Home",
        }
    );
    
    /* NOON 10-12 */
    NPC.register_block_LA(
        "Michael", 
        "no", 
        "School Lunch Outside",
        "weekday",
        "sunny",
        {
            "1000": "School Music Room|Music",
            "1050": "School West Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Courtyard|School Playground",
            "1155": "School West Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Michael", 
        "no", 
        "School Lunch Cafeteria",
        "weekday",
        "any",
        {
            "1000": "School Music Room|Music",
            "1050": "School West Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Cafeteria|Cafeteria",
            "1155": "School West Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Michael", 
        "no", 
        "Home",
        "weekend",
        "any",
        {
            "1000": "Michael Home|Home",
        }
    );
    
    /* EARLY AFTERNOON 12-15 */
    NPC.register_block_LA(
        "Michael", 
        "ea", 
        "School",
        "weekday",
        "any",
        {
            "1200": "School English Classroom|English",
            "1250": "School South Hallway|School Hallway",
            "1300": "School Science Classroom|Science",
            "1350": "School East Hallway|School Hallway",
            "1354": "School Locker Room|Gym",
            "1455": "School Locker Room|Gym Shower",
        }
    );
    NPC.register_block_LA(
        "Michael", 
        "ea", 
        "Home",
        "weekend",
        "any",
        {
            "1200": "Michael Home|Home",
        }
    );
    
    /* LATE AFTERNOON 15-19 */
    NPC.register_block_LA(
        "Michael", 
        "la", 
        "After School Basic",
        "weekday",
        "any",
        {
            "1500": "Middle School|School Waiting for Bus",
            "1505": "Michael Home|Home",
        }
    );
    NPC.register_block_LA(
        "Michael", 
        "la", 
        "Home",
        "weekend",
        "any",
        {
            "1500": "Michael Home|Home",
        }
    );
    
    /* EVENING 19-21 */
    NPC.register_block_LA(
        "Michael", 
        "ev", 
        "Home",
        "any",
        "any",
        {
            "1900": "Michael Home|Home",
        }
    );
    
    /* EARLY NIGHT 21-24 */
    NPC.register_block_LA(
        "Michael", 
        "en", 
        "Home",
        "any",
        "any",
        {
            "2100": "Michael Home|Home",
        }
    );
