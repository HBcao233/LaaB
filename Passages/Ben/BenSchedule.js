    /* LATE NIGHT 0-5 */
    NPC.register_block_LA(
        "Ben", 
        "ln", 
        "Home",
        "any",
        "any",
        {
            "0000": "Ben Home|Home",
        }
    );
    
    /* EARLY MORNING 5-7 */
    NPC.register_block_LA(
        "Ben", 
        "em", 
        "Home",
        "any",
        "any",
        {
            "0500": "Ben Home|Home",
        }
    );

    /* LATE MORNING 7-10 */
    NPC.register_block_LA(
        "Ben", 
        "lm", 
        "Pre-School Playground",
        "weekday",
        "sunny",
        {
            "0700": "Ben Home|Home",
            "0720": "Ben Home|Waiting for Bus",
            "0730": "School Courtyard|School Playground",
            "0755": "School West Hallway|School Hallway",
            "0800": "School English Classroom|English",
            "0850": "School East Hallway|School Hallway",
            "0900": "School History Classroom|History",
            "0950": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Ben", 
        "lm", 
        "Pre-School Cafeteria",
        "weekday",
        "any",
        {
            "0700": "Ben Home|Home",
            "0720": "Ben Home|Waiting for Bus",
            "0730": "School Cafeteria|Cafeteria",
            "0755": "School West Hallway|School Hallway",
            "0800": "School English Classroom|English",
            "0850": "School East Hallway|School Hallway",
            "0900": "School History Classroom|History",
            "0950": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Ben", 
        "lm", 
        "Home",
        "weekend",
        "any",
        {
            "0700": "Ben Home|Home",
        }
    );
    
    /* NOON 10-12 */
    NPC.register_block_LA(
        "Ben", 
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
        "Ben", 
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
        "Ben", 
        "no", 
        "School Lunch Drying Clothes in Bathroom",
        "weekday",
        "any",
        {
            "1000": "School Computer Room|Computer Class",
            "1050": "School South Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Cafeteria|Cafeteria",
            "1125": "School Restroom|School Drying Clothes",
            "1140": "School Cafeteria|Cafeteria",
            "1155": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Ben", 
        "no", 
        "Home",
        "weekend",
        "any",
        {
            "1000": "Ben Home|Home",
        }
    );
    NPC.register_block_LA(
        "Ben", 
        "no", 
        "Reading to kids on the weekend",
        "weekend",
        "any",
        {
            "1000": "City Library|Reading to Kids"
        }
    );
    
    /* EARLY AFTERNOON 12-15 */
    NPC.register_block_LA(
        "Ben", 
        "ea", 
        "School",
        "weekday",
        "any",
        {
            "1200": "School Science Classroom|Science",
            "1250": "School South Hallway|School Hallway",
            "1300": "School Math Classroom|Math",
            "1350": "School East Hallway|School Hallway",
            "1354": "School Locker Room|Gym",
            "1455": "School Locker Room|Gym Shower",
        }
    );
    NPC.register_block_LA(
        "Ben", 
        "ea", 
        "Home",
        "weekend",
        "any",
        {
            "1200": "Ben Home|Home",
        }
    );
    
    /* LATE AFTERNOON 15-19 */
    NPC.register_block_LA(
        "Ben", 
        "la", 
        "After School Basic",
        "weekday",
        "any",
        {
            "1500": "Middle School|School Waiting for Bus",
            "1505": "Ben Home|Home",
        }
    );
    NPC.register_block_LA(
        "Ben", 
        "la", 
        "Home",
        "weekend",
        "any",
        {
            "1500": "Ben Home|Home",
        }
    );
    
    /* EVENING 19-21 */
    NPC.register_block_LA(
        "Ben", 
        "ev", 
        "Home",
        "any",
        "any",
        {
            "1900": "Ben Home|Home",
        }
    );
    
    /* EARLY NIGHT 21-24 */
    NPC.register_block_LA(
        "Ben", 
        "en", 
        "Home",
        "any",
        "any",
        {
            "2100": "Ben Home|Home",
        }
    );
