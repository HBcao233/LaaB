    /* LATE NIGHT 0-5 */
    NPC.register_block_LA(
        "Thomas", 
        "ln", 
        "Home",
        "any",
        "any",
        {
            "0000": "Thomas Home|Home",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "ln", 
        "Homesick",
        "wednesday,thursday,friday,sick",
        "any",
        {
            "0000": "Thomas Home|Homesick",
        }
    );
    
    /* EARLY MORNING 5-7 */
    NPC.register_block_LA(
        "Thomas", 
        "em", 
        "Home",
        "any",
        "any",
        {
            "0500": "Thomas Home|Home",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "em", 
        "Homesick",
        "wednesday,thursday,friday,sick",
        "any",
        {
            "0500": "Thomas Home|Homesick",
        }
    );

    /* LATE MORNING 7-10 */
    NPC.register_block_LA(
        "Thomas", 
        "lm", 
        "Pre-School Playground",
        "weekday",
        "sunny",
        {
            "0700": "Thomas Home|Home",
            "0720": "Thomas Home|Waiting for Bus",
            "0730": "School Courtyard|School Playground",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Science Classroom|Science",
            "0850": "School East Hallway|School Hallway",
            "0900": "School History Classroom|History",
            "0950": "School West Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Thomas", 
        "lm", 
        "Pre-School Cafeteria",
        "weekday",
        "any",
        {
            "0700": "Thomas Home|Home",
            "0720": "Thomas Home|Waiting for Bus",
            "0730": "School Cafeteria|Cafeteria",
            "0755": "School South Hallway|School Hallway",
            "0800": "School Science Classroom|Science",
            "0850": "School East Hallway|School Hallway",
            "0900": "School History Classroom|History",
            "0950": "School West Hallway|School Hallway",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "lm", 
        "Homesick",
        "wednesday,thursday,friday,sick",
        "any",
        {
            "0700": "Thomas Home|Homesick",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "lm", 
        "Home",
        "weekend",
        "any",
        {
            "0700": "Thomas Home|Home",
        }
    );
    
    /* NOON 10-12 */
    NPC.register_block_LA(
        "Thomas", 
        "no", 
        "School Lunch Outside",
        "weekday",
        "sunny",
        {
            "1000": "School Art|Art",
            "1050": "School West Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Courtyard|School Playground",
            "1155": "School South Hallway|School Hallway",
        }
    );
    NPC.register_block_LA(
        "Thomas", 
        "no", 
        "School Lunch Cafeteria",
        "weekday",
        "any",
        {
            "1000": "School Art|Art",
            "1050": "School West Hallway|School Hallway",
            "1052": "School Cafeteria|School Lunch",
            "1108": "School Cafeteria|Cafeteria",
            "1155": "School South Hallway|School Hallway",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "no", 
        "Homesick",
        "wednesday,thursday,friday,sick",
        "any",
        {
            "1000": "Thomas Home|Homesick",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "no", 
        "Home",
        "weekend",
        "any",
        {
            "1000": "Thomas Home|Home",
        }
    );
    
    /* EARLY AFTERNOON 12-15 */
    NPC.register_block_LA(
        "Thomas", 
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
        "Thomas", 
        "ea", 
        "Homesick",
        "wednesday,thursday,friday,sick",
        "any",
        {
            "1200": "Thomas Home|Homesick",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "ea", 
        "Home",
        "weekend",
        "any",
        {
            "1200": "Thomas Home|Home",
        }
    );
    
    /* LATE AFTERNOON 15-19 */
    NPC.register_block_LA(
        "Thomas", 
        "la", 
        "After School Basic",
        "weekday",
        "any",
        {
            "1500": "Middle School|School Waiting for Bus",
            "1505": "Thomas Home|Home",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "la", 
        "Homesick",
        "wednesday,thursday,friday,sick",
        "any",
        {
            "1500": "Thomas Home|Homesick",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "la", 
        "Home",
        "weekend",
        "any",
        {
            "1500": "Thomas Home|Home",
        }
    );
    
    /* EVENING 19-21 */
    NPC.register_block_LA(
        "Thomas", 
        "ev", 
        "Home",
        "any",
        "any",
        {
            "1900": "Thomas Home|Home",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "ev", 
        "Homesick",
        "wednesday,thursday,friday,sick",
        "any",
        {
            "1900": "Thomas Home|Homesick",
        }
    );
    
    /* EARLY NIGHT 21-24 */
    NPC.register_block_LA(
        "Thomas", 
        "en", 
        "Home",
        "any",
        "any",
        {
            "2100": "Thomas Home|Home",
        }
    );

    NPC.register_block_LA(
        "Thomas", 
        "en", 
        "Homesick",
        "wednesday,thursday,friday,sick",
        "any",
        {
            "2100": "Thomas Home|Homesick",
        }
    );

    NPC.register_route(
		"Thomas",
		"Homesick",
		{
            ln: "Homesick",
            em: "Homesick",
            lm: "Homesick",
            no: "Homesick",
            ea: "Homesick",
            la: "Homesick",
            ev: "Homesick",
            en: "Homesick",
		},
	);
