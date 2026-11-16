    /* LATE NIGHT 0-5 */
    NPC.register_block_LA(
        "Carter", 
        "ln", 
        "Home",
        "any",
        "any",
        {
            "0000": "Carter Home|Home",
        }
    );
    
    /* EARLY MORNING 5-7 */
    NPC.register_block_LA(
        "Carter", 
        "em", 
        "Home",
        "any",
        "any",
        {
            "0500": "Carter Home|Home",
        }
    );

    /* LATE MORNING 7-10 */
    NPC.register_block_LA(
        "Carter", 
        "lm", 
        "Pre-School Playground",
        "weekday",
        "sunny",
        {
            "0700": "Carter Home|Home",
            "0720": "Carter Home|Waiting for Bus",
            "0730": "School Courtyard|School Playground",
            "0755": "School East Hallway|School Hallway",
            "0800": "School History Classroom|History",
            "0850": "School South Hallway|School Hallway",
            "0900": "School Math Classroom|Math",
            "0950": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Carter", 
        "lm", 
        "Pre-School Cafeteria",
        "weekday",
        "any",
        {
            "0700": "Carter Home|Home",
            "0720": "Carter Home|Waiting for Bus",
            "0730": "School Cafeteria|Cafeteria",
            "0755": "School East Hallway|School Hallway",
            "0800": "School History Classroom|History",
            "0850": "School South Hallway|School Hallway",
            "0900": "School Math Classroom|Math",
            "0950": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Carter", 
        "lm", 
        "Home",
        "weekend",
        "any",
        {
            "0700": "Carter Home|Home",
        }
    );
    
    /* NOON 10-12 */
    NPC.register_block_LA(
        "Carter", 
        "no", 
        "School Lunch Outside",
        "weekday",
        "sunny",
        {
            "1000": "School Auditorium|Drama",
            "1050": "School South Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Courtyard|School Playground",
            "1155": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Carter", 
        "no", 
        "School Lunch Cafeteria",
        "weekday",
        "any",
        {
            "1000": "School Auditorium|Drama",
            "1050": "School South Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Cafeteria|Cafeteria",
            "1155": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Carter", 
        "no", 
        "Home",
        "weekend",
        "any",
        {
            "1000": "Carter Home|Home",
        }
    );
    
    /* EARLY AFTERNOON 12-15 */
    NPC.register_block_LA(
        "Carter", 
        "ea", 
        "School",
        "weekday",
        "any",
        {
            "1200": "School Science Classroom|Science",
            "1250": "School West Hallway|School Hallway",
            "1300": "School English Classroom|English",
            "1350": "School East Hallway|School Hallway",
            "1354": "School Locker Room|Gym",
            "1455": "School Locker Room|Gym Shower",
        }
    );
    NPC.register_block_LA(
        "Carter", 
        "ea", 
        "Home",
        "weekend",
        "any",
        {
            "1200": "Carter Home|Home",
        }
    );
    
    /* LATE AFTERNOON 15-19 */
    NPC.register_block_LA(
        "Carter", 
        "la", 
        "After School Basic",
        "weekday",
        "any",
        {
            "1500": "Middle School|School Waiting for Bus",
            "1505": "Carter Home|Home",
        }
    );
    NPC.register_block_LA(
        "Carter", 
        "la", 
        "Home",
        "weekend",
        "any",
        {
            "1500": "Carter Home|Home",
        }
    );
    
    /* EVENING 19-21 */
    NPC.register_block_LA(
        "Carter", 
        "ev", 
        "Home",
        "any",
        "any",
        {
            "1900": "Carter Home|Home",
        }
    );
    
    /* EARLY NIGHT 21-24 */
    NPC.register_block_LA(
        "Carter", 
        "en", 
        "Home",
        "any",
        "any",
        {
            "2100": "Carter Home|Home",
        }
    );
