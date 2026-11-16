    /* LATE NIGHT 0-5 */
    NPC.register_block_LA(
        "Jackson", 
        "ln", 
        "Home",
        "any",
        "any",
        {
            "0000": "Jackson Home|Home",
        }
    );
    
    /* EARLY MORNING 5-7 */
    NPC.register_block_LA(
        "Jackson", 
        "em", 
        "Home",
        "any",
        "any",
        {
            "0500": "Jackson Home|Home",
        }
    );

    /* LATE MORNING 7-10 */
    NPC.register_block_LA(
        "Jackson", 
        "lm", 
        "Pre-School Playground",
        "weekday",
        "sunny",
        {
            "0700": "Jackson Home|Home",
            "0720": "Jackson Home|Waiting for Bus",
            "0730": "School Courtyard|School Playground",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Science Classroom|Science",
            "0850": "School East Hallway|School Hallway",
            "0900": "School History Classroom|History",
            "0950": "School West Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Jackson", 
        "lm", 
        "Pre-School Playground Rain",
        "weekday",
        "rainy, stormy",
        {
            "0700": "Jackson Home|Home",
            "0720": "Jackson Home|Waiting for Bus",
            "0730": "School Courtyard|School Playground Rain",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Science Classroom|Science",
            "0850": "School East Hallway|School Hallway",
            "0900": "School History Classroom|History",
            "0950": "School West Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Jackson", 
        "lm", 
        "Home",
        "weekend",
        "any",
        {
            "0700": "Jackson Home|Home",
        }
    );
    
    /* NOON 10-12 */
    NPC.register_block_LA(
        "Jackson", 
        "no", 
        "School Lunch Outside",
        "weekday",
        "any",
        {
            "1000": "School Art|Art",
            "1050": "School West Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Courtyard|School Playground",
            "1155": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Jackson", 
        "no", 
        "Home",
        "weekend",
        "any",
        {
            "1000": "Jackson Home|Home",
        }
    );
    
    /* EARLY AFTERNOON 12-15 */
    NPC.register_block_LA(
        "Jackson", 
        "ea", 
        "School",
        "weekday",
        "any",
        {
            "1200": "School Math Classroom|Math",
            "1250": "School West Hallway|School Hallway",
            "1300": "School English Classroom|English",
            "1350": "School East Hallway|School Hallway",
            "1354": "School Locker Room|Gym",
            "1455": "School Locker Room|Gym Shower",
        }
    );
    NPC.register_block_LA(
        "Jackson", 
        "ea", 
        "Home",
        "weekend",
        "any",
        {
            "1200": "Jackson Home|Home",
        }
    );
    
    /* LATE AFTERNOON 15-19 */
    NPC.register_block_LA(
        "Jackson", 
        "la", 
        "After School Basic",
        "weekday",
        "any",
        {
            "1500": "Middle School|School Waiting for Bus",
            "1505": "Jackson Home|Home",
        }
    );
    NPC.register_block_LA(
        "Jackson", 
        "la", 
        "Home",
        "weekend",
        "any",
        {
            "1500": "Jackson Home|Home",
        }
    );
    
    /* EVENING 19-21 */
    NPC.register_block_LA(
        "Jackson", 
        "ev", 
        "Home",
        "any",
        "any",
        {
            "1900": "Jackson Home|Home",
        }
    );
    
    /* EARLY NIGHT 21-24 */
    NPC.register_block_LA(
        "Jackson", 
        "en", 
        "Home",
        "any",
        "rainy,stormy",
        {
            "2100": "Jackson Home|Home",
        }
    );
    NPC.register_block_LA(
        "Jackson", 
        "en", 
        "Late Night Empty Lot",
        "any",
        "sunny",
        {
            "2100": "Jackson Home|Home",
            "2200": "Empty Lot|Empty Lot Naked",
            "2300": "Jackson Home|Home",
        }
    );

