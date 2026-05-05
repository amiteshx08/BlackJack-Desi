// suits array -> {"hearts", "diamonds", "clubs", "spades"}
const suits = ["heart", "diamond", "club", "spade"];

// ranks array -> {2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"}
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"];

// card type -> {suits: string(hearts, diamonds, clubs, spades), ranks: number or string}
export type card = {
  suits: string;
  ranks: number | string;
};

// deck will store all the cards at random
export let deck: card[] = [];

// function used to place cards in order
const combinations = () => {
  for (let i = 0; i < suits.length; ++i) {
    for (let j = 0; j < ranks.length; ++j) {
      deck.push({ suits: suits[i], ranks: ranks[j] });
    }
  }
};

// function used to shuffle the card in place
export const shuffle = () => {
  for (let i = deck.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

combinations();
shuffle();
