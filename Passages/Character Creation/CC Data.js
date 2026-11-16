setup.CC = {};

setup.CC.player = {
    SkinColor: [
        "White",
        "Shell",
        "Ivory",
        "Sand",
        "Pink",
        "Fair",
        "Beige",
        "Peach",
        "Honey",
        "Redwood",
        "Brown",
        "Ebony",
        "Chestnut",
        "Mocha",
        "Black",
    ],
    Build: [
        "Skinny",
        "Husky",
        "Muscular",
        "Muscular 2",
        "Muscular 3",
        "Muscular 4",
        "Muscular 5",
        "Muscular 6",
    ],
    LeftEyeColor: [
        "Amber",
        "Black",
        "Blue",
        "Brown",
        "Gray",
        "Green",
        "Hazel",
        "Pink",
        "Purple",
        "Red",
        "White"
    ],
    RightEyeColor: [
        "Amber",
        "Black",
        "Blue",
        "Brown",
        "Gray",
        "Green",
        "Hazel",
        "Pink",
        "Purple",
        "Red",
        "White"
    ],
    HairStyle: [
        "Combed",
        "Heroic",
        "Short",
        "Medium",
        "Messy",
        "Parted",
        "Shaggy",
        "Spiked",
        "Stylish",
        "Swooped",
        "Unkempt",
        "Heroic2",
        "Messy2",
        "Modern",
        "Parted2",
        "Shaggy2",
        "Short2",
        "Stylish2",
        "Swooped2",
        "Unkempt2",
        "Long",
        "Wavy Short",
    ],
    HairColor: [
        "Blonde",
        "Dirty Blonde",
        "Strawberry Blonde",
        "Ginger",
        "Auburn",
        "Light Brown",
        "Brown",
        "Dark Brown",
        "Charcoal",
        "Black",
        "Teal",
        "Blue",
        "Dark Blue",
        "Lime",
        "Green",
        "Pink",
        "Purple",
        "Red",
        "Gray",
        "White",
    ],
    Freckles: [0, 1],
    ShoulderFreckles: [0, 1],
    ArmFreckles: [0, 1],
    ChestScar: [0, 1],
    FaceScar: [0, 1],
    LeftArmScar: [0, 1],
    RightLegScar: [0, 1],
    PenisSize: [
        "Tiny",
        "Small",
        "Average",
        "Large",
        "Gigantic",
    ],
    Balls: [
        "Small",
        "Medium",
        "Large",
        "Gigantic",
    ],
    PenisStyle: ["Cut", "Uncut"],
    PenisLength: [0, 1],
    PubicHair: [
        "None",
        "Wisps",
        "Short",
        "Long",
    ],
    Butt: [
        "Cute",
        "Firm",
        "Big",
    ],
    Grower: [0, 1],
};

setup.CC.traits = [
    "Athletic",
    "Bookworm",
    "Genius",
    "Childish",
    "Mature",
    "Free Footed",
    "Indoor Kid",
    "Neat",
    "Outdoorsy",
    "Small Bladder",
    "Commando",
]

setup.CC.randomize = function () {
    /* Player */
    const player = State.getVar("$Player");
    for (const key of Object.keys(setup.CC.player)) {
        player[key] = setup.CC.player[key].random();
    }
    State.setVar("$Player", player)
    
    /* Traits */
    const traits = [];
    while (traits.length < 3) {
        let t = setup.CC.traits.random();
        if(! traits.includes(t)){
            traits.push(t)
        };
    }
    State.setVar("$Player.Traits", traits)
}