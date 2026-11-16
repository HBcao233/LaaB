/* constants */
const POKER_NUM_CARDS_IN_DECK = 52;
const POKER_NUM_VALUES_IN_DECK = 13;
const POKER_NUM_SUITS_IN_DECK = 4; // ♣︎♦︎♥︎♠︎
const POKER_NUM_CARDS_IN_HAND = 5;
const POKER_ACE_VALUE = Math.pow(2, 13); // This is the high ace value (when used after a K)
const POKER_STRAIGHT_LOW_ACE_INDICATOR = parseInt("10000000011110", 2);
const POKER_TEN_CARD_POSITION = 8;
const POKER_RANK_BASE_VALUE = Math.pow(10, 9);
const POKER_NUM_CARDS_PER_PLAYER = 5;
const POKER_VALUES = "23456789TJQKA";
const POKER_SUITS = [`♥︎`, `♦︎`, `♣︎`, `♠︎`];
const POKER_FACES = "JQKA";
// Rank ID: Number of cards
const POKER_COMBO_RANK_INDEXES_TO_NUM_CARDS_MAP = {
    2: 2, // Pair 
    3: 2, // Two Pair (2 per combo)
    4: 3, // Trips
    8: 4, // Quads
};
const POKER_DECK_BASE_PATH = 'Images/Poker/Decks/';
const POKER_CLOTH_STRIPPING_ORDER = [
    'Outer',
    'Shoes',
    'Socks',
    'Top',
    'Bottoms',
    'Undies',
    'Hands',
];

/**
 * This file defines the Poker Object to store and coordinate a game of Strip Poker
 * 
 * To initialize:
 *      <<set $Poker to new Poker()>>
 * 
 * Attributes:
 *      data: {
 *          deck: int[],
 *          players: {
 *              id: string, // NPC.ID or "PC"
 *              hand: int[],
 *              pokerTrait: string,  // "basic", "cautious", "wild", "cheater", "lucky"
 *              state: {},
 *              clothes: {},
 *          }[],
 *          deckImage: string,
 *          stage: int, // 0 = start, 1 = playtime, 2 = end (find loser)
 *          step: int, // steps happen within each stage, but for now only works for stage 2
 *          currentTurnIndex: int, // 0 is the first player in data.players and so on
 *          afterGamePassage: string, passage name to return to after the game is done
 *          containerPassage: string, a passage that contains the poker game
 *      }
 */
window.Poker = function (data = {}) {
    if (data.containerPassage == null) {
        throw new Error('Poker: data.containerPassage is required');
    }

    if (data.players == null) {
        throw new Error('Poker: data.players is required');
    }

    this.players = data.players;
    this.deck = data.deck || this.buildDeck();
    this.deckImage = data.deckImage || 'default.png';
    this.stage = data.stage || 0;
    this.step = data.step || 0;
    this.currentTurnIndex = data.currentTurnIndex || 0;
    this.afterGamePassage = data.afterGamePassage || "PH Bedroom";
    this.containerPassage = data.containerPassage;

    State.setVar("$PokerEquipmentLostCount", 0);
};

/* Mandatory for Sugarcube */
Poker.prototype.clone = function () {
    let data = {};
    /* only get the object members */
    for (const key of Object.keys(this)) {
        if (!("get" in Object.getOwnPropertyDescriptor(this, key)) && !(typeof this[key] == "function")) {
            data[key] = clone(this[key]);
        }
    }
    return (new Poker(data));
};

/* Mandatory for Sugarcube */
Poker.prototype.toJSON = function () {
    let data = {};
    /* only get the object members */
    for (const key of Object.keys(this)) {
        if (!("get" in Object.getOwnPropertyDescriptor(this, key)) && !(typeof this[key] == "function")) {
            data[key] = clone(this[key]);
        }
    }
    return JSON.reviveWrapper('new Poker($ReviveData$)', data);
};

/**
 * Starts the deck and empties hands
 * 
 * Card Matrix
 *     2  3  4  5  6  7  8  9  T  J  Q  K  A
 *  ♥︎ 00 01 02 03 04 05 06 07 08 09 10 11 12
 *  ♦︎ 13 14 15 16 17 18 19 20 21 22 23 24 25
 *  ♣︎ 26 27 28 29 30 31 32 33 34 35 36 37 38
 *  ♠︎ 39 40 41 42 43 44 45 46 47 48 49 50 51
 * 
 * @returns {int[]} deck
 */
Poker.prototype.buildDeck = function () {
    let deck = Array.from(new Array(POKER_NUM_CARDS_IN_DECK), (_, index) => index);
    let count = POKER_NUM_CARDS_IN_DECK + 1;

    while ((count -= 1)) {
        deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
    }

    // empty players' hands
    this.players.forEach(player => player.hand = []);

    return deck;
};

/* Fisher-Yates Shuffle. */
Poker.prototype.shuffleDeck = function () {
    let currentIndex = this.deck.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [this.deck[currentIndex], this.deck[randomIndex]] =
        [this.deck[randomIndex], this.deck[currentIndex]];
    }
};

/** Concatenates a new player to this.players array */
Poker.prototype.addPlayer = function (playerId, pokerTrait = 'basic') {
    this.players.push({id: playerId, pokerTrait, hand: []});
};

Poker.prototype.getActivePlayers = function () {
    return this.players.filter(player => this.getClothesScore(player.id) > 0);
};

/**
 * Gives all this.players POKER_NUM_CARDS_PER_PLAYER amount of cards
 * @return {bool} if it could deal cards
 */
Poker.prototype.dealCards = function () {
    const activePlayers = this.getActivePlayers();
    const totalCardsToDeal = activePlayers.length * POKER_NUM_CARDS_PER_PLAYER;

    // Check that the deck has enough cards
    if (totalCardsToDeal > this.deck.length) {
        alert(`Not enough cards in deck to deal to all active players. Required: ${totalCardsToDeal}. Actual: ${this.deck.length}.`);
        return false;
    }

    // deal cards one by one to each player
    for (let _i = 0; _i < POKER_NUM_CARDS_PER_PLAYER; _i++) {
        activePlayers.forEach(player => player.hand.push(this.deck.pop()));
    }

    return true;
};

/**
 * @typedef {{royal_flush: boolean, straight_flush: boolean, quads: boolean, full_house: boolean, flush: boolean, straight: boolean, trips: boolean, two_pairs: boolean, pair: boolean, high_card: boolean}} Ranks
 */

/**
  * Returns a descriptor object with all the necessary information about the rank of a hand based on a playerId.
  * For a thorough explanation, see: https://javascript.plainenglish.io/building-a-poker-hand-evaluator-without-conditional-branches-556c39c8e33e
  * @param {int[]} hand
  * @returns {{hand: int[], suits: int[], values: int[], rankIndex: int, rankValue: int, ranks: Ranks, rankDescription: string, display: string}}
*/
Poker.rankHand = function (hand) {
    const suits = new Array(POKER_NUM_SUITS_IN_DECK).fill(0);
    const values = new Array(POKER_NUM_VALUES_IN_DECK).fill(0);

    /* sets up suits and values */
    hand.forEach(card => {
        suits[Math.floor(card / POKER_NUM_VALUES_IN_DECK)] += 1;
        values[card % POKER_NUM_VALUES_IN_DECK] += 1;
    });

    // numerical rank value
    let rankValue = values.reduce(
        (total, val, index) =>
            (total +=
                ((val === 1 && Math.pow(2, index + 1)) || 0) +
                ((val > 1 && Math.pow(2, index + 1) * POKER_ACE_VALUE * val) || 0)),
        0,
    );

    // first card in case of a straight
    const firstCardIndex = values.findIndex(index => index === 1);

    // which ranks the hand has
    const ranks = {
        royal_flush: false,
        straight_flush: false,
        quads: values.some(count => count === 4),
        full_house: values.filter(Boolean).length === 2,
        flush: suits.some(count => count === POKER_NUM_CARDS_IN_HAND),
        straight:
            values
                .slice(firstCardIndex, firstCardIndex + POKER_NUM_CARDS_IN_HAND)
                .filter(count => count === 1).length === 5 ||
            rankValue === POKER_STRAIGHT_LOW_ACE_INDICATOR,
        trips: values.some(count => count === 3),
        two_pairs: values.filter(count => count === 2).length === 2,
        pair: values.filter(count => count === 2).length === 1,
        high_card: true,
    };

    ranks.straight_flush = ranks.flush && ranks.straight;
    ranks.royal_flush =
        ranks.straight_flush && firstCardIndex === POKER_TEN_CARD_POSITION;

    let rankIndex = 0;
    let rankDescription = "";

    // get the highest rank for the hand
    Object.keys(ranks).every((key, index) => {
        rankIndex = 10 - index;
        rankDescription = key;
        return !ranks[key]; 
    });

    // calculate the hand's rank value based on its current rank
    const fh_pair_index = values.findIndex(count => count === 2) + 1;
    rankValue +=
        rankIndex * POKER_RANK_BASE_VALUE -
        ((rankValue === POKER_STRAIGHT_LOW_ACE_INDICATOR && POKER_ACE_VALUE - 1) || 0) -
        ((ranks.full_house &&
            Math.pow(2, fh_pair_index) * POKER_ACE_VALUE * 2 + fh_pair_index) || 0);

    // create rank description (e.g. Full House, Two Pairs, Trips, etc)
    rankDescription = rankDescription
        .split("_")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return {
        hand,
        suits,
        values,
        rankIndex,
        rankValue,
        ranks,
        rankDescription,
        display: Poker.handDisplay(hand),
    };
};

/**
  * @returns {{
  *     winner: {playerId: int, handDisplay: string, rankDesc: string},
  *     loser: {playerId: int, handDisplay: string, rankDesc: string},
  * }}
  */
Poker.prototype.compareHands = function () {
    const ranks = this.getActivePlayers()
        .map(player => ({playerId: player.id, ...Poker.rankHand(player.hand)}))
        .sort((handA, handB) => handB.rankValue - handA.rankValue);

    const winner = JSON.parse(JSON.stringify(ranks[0]));
    const loser = JSON.parse(JSON.stringify(ranks[ranks.length - 1]));

    return {
        winner: {playerId: winner.playerId, handDisplay: winner.display, rankDesc: winner.rankDescription},
        loser: {playerId: loser.playerId, handDisplay: loser.display, rankDesc: loser.rankDescription},
    };
};

Poker.prototype.sortPlayerHands = function () {
    this.players.forEach(player => {
        player.hand = player.hand.sort(
            (card1, card2) => (card1 % POKER_NUM_VALUES_IN_DECK) - (card2 % POKER_NUM_VALUES_IN_DECK)
        );
    });
};

Poker.prototype.sortPCHand = function () {
    const player = this.players.find(player => player.id === 'PC');

    if (player === undefined) {
        alert(`Could not sortPCHand: Poker Player PC not found.`);
        return;
    }
    if (player.hand.length === 0) {
        return;
    }

    player.hand = player.hand.sort(
        (card1, card2) => (card1 % POKER_NUM_VALUES_IN_DECK) - (card2 % POKER_NUM_VALUES_IN_DECK)
    );
};

Poker.prototype.getPCHand = function () {
    const player = this.players.find(player => player.id === 'PC');

    if (player === undefined) {
        alert(`Could not getPCHand: Poker Player PC not found.`);
        return;
    }

    return player.hand;
};

/**
 * Puts cards from the player's hand to the deck, then shuffles the deck and gives the player the same amount of cards back
 * @param {int} playerId
 * @param {int[]} cardsToSwap
 * @param {boolean} skillCheckPassed true if you want to have special draws for player.pokerTrait "cheater" and "lucky"
 */
Poker.prototype.swapCards = function (playerId, cardsToSwap, skillCheckPassed = false) {
    if (!Array.isArray(cardsToSwap) || cardsToSwap.length === 0) {
        return [];
    }

    const player = this.players.find(player => player.id === playerId);

    if (player === undefined) {
        alert(`Could not swap cards: Poker Player ${playerId} not found.`);
        return [];
    }
    if (player.hand.length === 0) {
        return [];
    }

    // remove cards from player's hand
    const currentHand = player.hand.filter(card => cardsToSwap.indexOf(card) === -1);

    // return cards to the deck
    this.deck.push(...cardsToSwap);
    this.shuffleDeck();

    const newCards = [];

    // search for another card with the same value as the highest value card in hand
    if (skillCheckPassed && player.pokerTrait === 'cheater') {
        const highestValueCard = Poker.getHighestValueCard(player.hand);
        const indexSameCardFromDeck = this.deck.findIndex(card => card === highestValueCard);
        
        // too bad if there's no other card in deck with the same value ¯\_(ツ)_/¯
        if (indexSameCardFromDeck) {
            newCards.push(this.deck.splice(indexSameCardFromDeck, 1)[0]);
        }
    }
    // find a pair of aces or kings (or anything in decreasing value depending on availability)
    else if (skillCheckPassed && player.pokerTrait === 'lucky' && cardsToSwap.length > 1) {
        // Turn deck into values only (2,3,4...13)
        const valueDeck = this.deck.map(original => original % POKER_NUM_VALUES_IN_DECK);
        const countedDeck = Array.from(valueDeck).fill(0);

        // counts repeated values
        valueDeck.forEach(card => countedDeck[card] += 1);

        // filters out values that are not repeated and sorts them by value
        const repeatedValues = countedDeck
            .map((_, i) => i)
            .filter(i => countedDeck[i] > 1)
            .sort((a, b) => b - a);

        // there is at least 1 pair of cards with the same value in deck
        if (repeatedValues.length > 0) {
            const highestValuePairInDeck = repeatedValues[0];
            
            // push the highest value pair into the player's hand
            while (newCards.length < 2) {
                newCards.push(
                    this.deck.splice(
                        this.deck.findIndex(card => (card % POKER_NUM_VALUES_IN_DECK) === highestValuePairInDeck),
                        1,
                    )[0],
                );
            }
        }
    }

    const missingCards = cardsToSwap.length - newCards.length;

    // add any missing cards
    for (let i = 0; i < missingCards; i++) {
        newCards.push(this.deck.pop());
    }

    player.hand = [...currentHand, ...newCards];

    return newCards;
};

/**
 * @param {int} playerId
 * @returns {int[]} cards to be swapped based on player's poker trait
 */
Poker.prototype.decideSwapBasedOnTrait = function (playerId) {
    const player = this.players.find(p => p.id === playerId);

    if (player === undefined) {
        alert(`Could not decide swap: Poker Player ${playerId} not found.`);
        return [];
    }
    if (player.hand.length === 0) {
        return [];
    }

    const rank = Poker.rankHand(player.hand);
    const {rankIndex, hand, values} = rank;
    let cardsToBeSwapped = [];
    const isBasic = ['basic', 'cheater', 'lucky'].includes(player.pokerTrait);
    const isCautious = player.pokerTrait === 'cautious';

    // Action depends on which rank the hand has
    switch (rankIndex) {
        case 1: // High Card
            if (isBasic) { // swap all but highest value card
                const highestValueCard = Poker.getHighestValueCard(hand);
                const index = hand.indexOf(highestValueCard);
                cardsToBeSwapped = hand.toSpliced(index, 1);
            } else if (isCautious) { // swap all but face cards
                cardsToBeSwapped = hand.filter(card => !POKER_FACES.includes(Poker.handDisplay([card]).split('')[0]));
            } else { // swap everything
                cardsToBeSwapped = [...hand];
            }

            break;
        // Do the same for pairs, trips, quads
        case 2: // Pair
        case 3: // Two Pairs
        case 4: // Trips
        case 8: // Quads
            cardsToBeSwapped = Poker.getCardsNotPartOfCombo(hand, rankIndex, values);
            break;
        // Don't do anything since all these require full hand
        case 5: // Straight
        case 6: // Flush
        case 7: // Full House
        case 9: // Straight Flush
        case 10: // Royal Flush
    }

    return cardsToBeSwapped;
};

/**
 * @param {int[]} hand
 * @returns {int} highest value card (as integer)
 */
Poker.getHighestValueCard = function (hand) {
    const values = hand
        .map(original => ({original, value: original % POKER_NUM_VALUES_IN_DECK}))
        .sort((a, b) => b.value - a.value);

    return values[0].original;
};

/**
 * @param {int[]} hand 
 * @param {int} rankIndex 
 * @param {int[]} values 
 * @returns {int[]} all the cards in a hand that are not part of a pair, two-pair, trips or quads
 */
Poker.getCardsNotPartOfCombo = function (hand, rankIndex, values) {
    const repeatedValues = values
        .map((_, i) => i)
        .filter(i => values[i] === POKER_COMBO_RANK_INDEXES_TO_NUM_CARDS_MAP[rankIndex]);

    return hand.filter(card => !repeatedValues.includes(card % POKER_NUM_VALUES_IN_DECK));
};

/**
 * @param {int[]} hand 
 * @returns {string} hand in string format to be displayed in-game. Example: A♣︎ 5♦︎ 9♥︎ 9♣︎ Q♠︎
 */
Poker.handDisplay = function (hand) {
    return hand
        .reduce(
            (obj, item) => {
                const value = POKER_VALUES[item % POKER_NUM_VALUES_IN_DECK];
                const suit = POKER_SUITS[Math.floor(item / POKER_NUM_VALUES_IN_DECK)];

                obj.push(`${value}${suit}`);

                return obj;
            },
            [],
        ).join(" ");
};

/**
 * @param {int|int[]} input can pass either one card (as int value) or an array of cards (as int values)
 * @param {boolean} flipped
 * @param {boolean} mini 
 * @returns {string} returns html img tags for all the cards in input
 */
Poker.prototype.handDisplayImage = function (input, flipped = false, mini = false, pcSelect = false) {
    if (typeof input === 'number') {
        const value = POKER_VALUES[input % POKER_NUM_VALUES_IN_DECK];
        const suit = POKER_SUITS[Math.floor(input / POKER_NUM_VALUES_IN_DECK)];
        const color = [`♥︎`, `♦︎`].includes(suit) ? 'red' : 'black';

        if (!flipped && mini) {
            return `
                <div class="poker-card-mini poker-card-${color}"><div class="poker-card-mini-suit">${suit}</div><div class="poker-card-mini-value">${value}</div></div>
            `;
        }

        let position = '0';

        if (!flipped) {
            let value = input % POKER_NUM_VALUES_IN_DECK + 2; // 2,3,4...14
            value = value === 14 ? 1 : value; // case for aces

            position = (mini ? -32 : -130) * ((Math.floor(input / POKER_NUM_VALUES_IN_DECK) * POKER_NUM_VALUES_IN_DECK) + value);
        }

        pcSelect = pcSelect && !flipped && !mini;
        const onClick = pcSelect ? `onclick="pokerSelectCard(${input})"` : '';

        return `<div id="poker-card-${input}" class="poker-card ${pcSelect ? 'pointer poker-card-selectable' : ''}" style="background-image: url('${POKER_DECK_BASE_PATH + this.deckImage}'); background-position: ${position}px;" ${onClick}></div>`;
    }
    
    if (Array.isArray(input)) {
        return input.map(i => this.handDisplayImage(i, flipped, mini, pcSelect)).join('');
    }

    alert(`Could not get hand display image: Input type not valid: ${input} is ${typeof input}`);
    return '';
}

Poker.prototype.wereCardsDealt = function () {
    for (let player of this.players) {
        if (player.hand.length > 0) {
            return true;
        }
    }

    return false;
};

Poker.prototype.getRivals = function () {
    return this.players.filter(player => player.id !== 'PC');
};

Poker.prototype.shouldPlayerCover = function (playerId) {
    const player = this.players.find(p => p.id === playerId);

    if (player === undefined) {
        alert(`Poker.shouldPlayerCover error: Poker Player ${playerId} not found.`);
        return false;
    }

    return player.clothes.Bottoms === 0 && player.clothes.Undies === 0 && player.clothes.Hands === 1;
};

Poker.prototype.getClothesScore = function (playerId) {
    const player = this.players.find(p => p.id === playerId);

    if (player === undefined) {
        alert(`Poker.getClothesScore error: Poker Player ${playerId} not found.`);
        return 0;
    }

    return Object.keys(player.clothes).reduce(
        (acc, item) => acc + player.clothes[item],
        0,
    );
};

Poker.prototype.hasOnlyHandsLeft = function (playerId) {
    const player = this.players.find(p => p.id === playerId);

    if (player === undefined) {
        alert(`Poker.hasOnlyHandsLeft error: Poker Player ${playerId} not found.`);
        return false;
    }

    return this.getClothesScore(playerId) === 1 && player.clothes.Hands === 1;
};

Poker.prototype.hasOnlyBriefsLeft = function (playerId) {
    const player = this.players.find(p => p.id === playerId);

    if (player === undefined) {
        alert(`Poker.hasOnlyHandsLeft error: Poker Player ${playerId} not found.`);
        return false;
    }

    return this.getClothesScore(playerId) === 2 && player.clothes.Hands === 1 && player.clothes.Undies === 1;
};


Poker.prototype.hasNoUndiesButBottomsLeft = function (playerId) {
    const player = this.players.find(p => p.id === playerId);

    if (player === undefined) {
        alert(`Poker.hasNoUndiesButBottomsLeft error: Poker Player ${playerId} not found.`);
        return false;
    }

    return this.getClothesScore(playerId) > 2 && player.clothes.Hands === 1 && player.clothes.Bottoms === 1 && player.clothes.Undies === 0;
};

Poker.prototype.removeNextNPCCloth = function (playerId) {
    const playerIndex = this.players.findIndex(p => p.id === playerId);

    if (playerIndex === -1) {
        alert(`Poker.removeNextNPCCloth error: Poker Player ${playerId} not found.`);
        return null;
    }

    for (let i = 0; i < POKER_CLOTH_STRIPPING_ORDER.length; i++) {
        const clothPiece = POKER_CLOTH_STRIPPING_ORDER[i];

        if (this.players[playerIndex].clothes[clothPiece] === 1) {
            this.players[playerIndex].clothes[clothPiece] = 0;

            return clothPiece;
        }
    }

    alert(`Poker.removeNextNPCCloth error: Poker Player ${playerId} is already naked.`);
    return null;
};

Poker.prototype.setNextPlayerTurnIndex = function () {
    for (let i = this.currentTurnIndex; i < this.players.length; i++) {
        this.currentTurnIndex = i + 1;

        if (this.currentTurnIndex >= this.players.length || this.getClothesScore(this.players[this.currentTurnIndex].id) > 0) {
            break;
        }
    }
};

Poker.prototype.setNextRoundTurnIndex = function () {
    for (let i = 0; i < this.players.length; i++) {
        this.currentTurnIndex = i;

        if (this.getClothesScore(this.players[this.currentTurnIndex].id) > 0) {
            break;
        }
    }
};

Poker.prototype.debug = function () {
    const copy = JSON.parse(JSON.stringify(this));

    copy.deck = copy.deck.map(card => Poker.handDisplay([card]));
    copy.players.forEach(player => player.hand = Poker.handDisplay(player.hand));
    copy.deckLength = copy.deck.length;

    return copy;
};

Poker.getDefaultClothesFor = function (id = 'PC') {
    if (id === 'PC') {
        return {
            Outer: (State.getVar('$PlayerOuter')?.Type || "None") === "None" ? 0 : 1,
            Shoes: (State.getVar('$PlayerShoes')?.Type || "None") === "None" ? 0 : 1,
            Socks: (State.getVar('$PlayerSocks')?.Type || "None") === "None" ? 0 : 1,
            Top: (State.getVar('$PlayerTop')?.Type || "None") === "None" ? 0 : 1,
            Bottoms: (State.getVar('$PlayerBottoms')?.Type || "None") === "None" ? 0 : 1,
            Undies: (State.getVar('$PlayerUndies')?.Type || "None") === "None" ? 0 : 1,
            Hands: 1,
        };
    }

    return {
        Outer: (State.getVar(`$${id}Outer`)?.Type || "None") === "None" ? 0 : 1,
        Shoes: (State.getVar(`$${id}Shoes`)?.Type || "None") === "None" ? 0 : 1,
        Socks: (State.getVar(`$${id}Socks`)?.Type || "None") === "None" ? 0 : 1,
        Top: (State.getVar(`$${id}Top`)?.Type || "None") === "None" ? 0 : 1,
        Bottoms: (State.getVar(`$${id}Bottoms`)?.Type || "None") === "None" ? 0 : 1,
        Undies: (State.getVar(`$${id}Undies`)?.Type || "None") === "None" ? 0 : 1,
        Hands: 1,
    };
};

Poker.prototype.setPlayerState = function (playerId, state, value) {
    const playerIndex = this.players.findIndex(p => p.id === playerId);

    if (playerIndex === -1) {
        alert(`Poker.setPlayerState error: Poker Player ${playerId} not found.`);
        return;
    }

    this.players[playerIndex].state[state] = value;
};

Poker.prototype.setPlayerStates = function (playerId, newState) {
    const playerIndex = this.players.findIndex(p => p.id === playerId);

    if (playerIndex === -1) {
        alert(`Poker.setPlayerStates error: Poker Player ${playerId} not found.`);
        return;
    }

    this.players[playerIndex].state = {
        ...this.players[playerIndex].state,
        ...newState,
    };
};

Poker.prototype.getPlayerRemainingClothes = function (playerId) {
    const playerIndex = this.players.findIndex(p => p.id === playerId);

    if (playerIndex === -1) {
        alert(`Poker.getPlayerRemainingClothes error: Poker Player ${playerId} not found.`);
        return;
    }

    return Object.keys(this.players[playerIndex].clothes).filter(cl => this.players[playerIndex].clothes[cl] === 1);
}

Poker.prototype.getPlayerMissingClothes = function (playerId) {
    const playerIndex = this.players.findIndex(p => p.id === playerId);

    if (playerIndex === -1) {
        alert(`Poker.getPlayerMissingClothes error: Poker Player ${playerId} not found.`);
        return;
    }

    return Object.keys(this.players[playerIndex].clothes).filter(cl => this.players[playerIndex].clothes[cl] === 0);
}

Poker.prototype.getADClothesFromPlayer = function (playerId, overwriteClothes = {}) {
    const playerIndex = this.players.findIndex(p => p.id === playerId);

    if (playerIndex === -1) {
        alert(`Poker.getADClothesFromPlayer error: Poker Player ${playerId} not found.`);
        return {};
    }

    const clothes = {};

    Object.keys(this.players[playerIndex].clothes)
        .filter(i => this.players[playerIndex].clothes[i] === 0)
        .forEach(i => {
            clothes[i] = State.getVar("$None");
        });
    
    return {
        ...clothes,
        ...overwriteClothes,
    };
};