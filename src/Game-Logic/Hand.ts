// card type
type card = {
  suits: string;
  ranks: number | string;
};

export class Hand {
  // attribute
  cards: card[] = [];

  // constructor
  constructor(cards: card[]) {
    this.cards = cards;
  }

  // methods

  hit(card: card) {
    // We will push a card, which will be withdrawn from the Deck[]
   this.cards.push(card)
  }

  stand() {
    return this.cards;
  }

  clear() {
    this.cards = []
  }
}

