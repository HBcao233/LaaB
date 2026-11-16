    /* LATE NIGHT 0-5 */
    NPC.register_block_LA(
        "Lucas", 
        "ln", 
        "Home",
        "any",
        "any",
        {
            "0000": "Lucas Home|Home",
        }
    );
    
    /* EARLY MORNING 5-7 */
    NPC.register_block_LA(
        "Lucas", 
        "em", 
        "Home",
        "any",
        "any",
        {
            "0500": "Lucas Home|Home",
        }
    );

    /* LATE MORNING 7-10 */
    NPC.register_block_LA(
        "Lucas", 
        "lm", 
        "Pre-School Playground",
        "weekday",
        "sunny",
        {
            "0700": "Lucas Home|Home",
            "0720": "Northend|Waiting for Bus",
            "0730": "School Courtyard|School Playground",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Math Classroom|Math",
            "0850": "School South Hallway|School Hallway",
            "0900": "School Science Classroom|Science",
            "0950": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Lucas", 
        "lm", 
        "Pre-School Cafeteria",
        "weekday",
        "any",
        {
            "0700": "Lucas Home|Home",
            "0720": "Northend|Waiting for Bus",
            "0730": "School Cafeteria|Cafeteria",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Math Classroom|Math",
            "0850": "School South Hallway|School Hallway",
            "0900": "School Science Classroom|Science",
            "0950": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Lucas", 
        "lm", 
        "Home",
        "weekend",
        "any",
        {
            "0700": "Lucas Home|Home",
        }
    );
    
    /* NOON 10-12 */
    NPC.register_block_LA(
        "Lucas", 
        "no", 
        "School Lunch Outside",
        "weekday",
        "sunny",
        {
            "1000": "School Auditorium|Drama",
            "1050": "School South Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Courtyard|School Playground",
            "1155": "School East Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Lucas", 
        "no", 
        "School Lunch Cafeteria",
        "weekday",
        "any",
        {
            "1000": "School Auditorium|Drama",
            "1050": "School South Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Cafeteria|Cafeteria",
            "1155": "School East Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Lucas", 
        "no", 
        "Home",
        "weekend",
        "any",
        {
            "1000": "Lucas Home|Home",
        }
    );
    
    /* EARLY AFTERNOON 12-15 */
    NPC.register_block_LA(
        "Lucas", 
        "ea", 
        "School",
        "weekday",
        "any",
        {
            "1200": "School History Classroom|History",
            "1250": "School West Hallway|School Hallway",
            "1300": "School English Classroom|English",
            "1350": "School East Hallway|School Hallway",
            "1354": "School Locker Room|Gym",
            "1455": "School Locker Room|Gym Shower",
        }
    );
    NPC.register_block_LA(
        "Lucas", 
        "ea", 
        "Home",
        "weekend",
        "any",
        {
            "1200": "Lucas Home|Home",
        }
    );
    
    /* LATE AFTERNOON 15-19 */
    NPC.register_block_LA(
        "Lucas", 
        "la", 
        "After School Basic",
        "weekday",
        "any",
        {
            "1500": "Middle School|School Waiting for Bus",
            "1505": "Lucas Home|Home",
        }
    );
    NPC.register_block_LA(
        "Lucas", 
        "la", 
        "Home",
        "weekend",
        "any",
        {
            "1500": "Lucas Home|Home",
        }
    );
    
    /* EVENING 19-21 */
    NPC.register_block_LA(
        "Lucas", 
        "ev", 
        "Home Take Out Trash PJ",
        "any",
        "sunny",
        {
            "1900": "Lucas Home|Home",
            "2035": "Northend|Take Out Trash PJ",
            "2055": "Lucas Home|Home",
        }
    );

    NPC.register_block_LA(
        "Lucas", 
        "ev", 
        "Home Take Out Trash",
        "any",
        "rainy,stormy",
        {
            "1900": "Lucas Home|Home",
            "2035": "Northend|Take Out Trash",
            "2055": "Lucas Home|Home",
        }
    );
    
    /* EARLY NIGHT 21-24 */
    NPC.register_block_LA(
        "Lucas", 
        "en", 
        "Home",
        "any",
        "any",
        {
            "2100": "Lucas Home|Home",
        }
    );
