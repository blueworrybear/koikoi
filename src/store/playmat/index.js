export const Playmat = {
    namespaced: true,
    state: () => ({
        deck: [],
        board: [],
    }),
    mutations: {
        deckInit(state, deck) {
            state.deck = deck;
        }
    },
    actions: {
        deckInit
    },
}

function deckInit({commit}) {
    // type:
    //   Hikari: 0
    //   Tane: 1
    //   Poetry: 2
    //   Blue Tanzaku: 3
    //   Plain Tanzaku: 4
    //   Kasu: 5
    var types = [
        0,2,5,5,
        1,2,5,5,
        0,2,5,5,
        1,4,5,5,
        1,4,5,5,
        1,3,5,5,
        1,4,5,5,
        0,1,5,5,
        1,3,5,5,
        1,3,5,5,
        0,1,4,5,
        0,5,5,5,
    ];
    var deck = [];
    for (var i = 0; i < 48; ++i) {
        var card = {
            month: Math.floor(i / 4),
            type: types[i],
            index: i
        };
        deck.push(card);
    }
    shuffle(deck);
    commit('deckInit', deck);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
