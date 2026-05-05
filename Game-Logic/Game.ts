import { Hand } from "./Hand";
import { deck } from "./Deck";
import type { card } from "./Deck";

// Game class which will orchestrate everything
class Game {

// attributes of game class
  player: Hand;
  dealer: Hand;
  deck: card[];

  constructor() {
    this.deck = deck;
    this.player = new Hand([]);
    this.dealer = new Hand([]);
    this.dealCards();
  }

// this method will distribute cards to both dealer player and the dealer one by one
  dealCards() {
    this.player.hit(this.deck.pop()!);
    this.dealer.hit(this.deck.pop()!);
    this.player.hit(this.deck.pop()!);
    this.dealer.hit(this.deck.pop()!);
  }

// this method will add a card from the deck to the player's share
  playerHit() {
    this.player.hit(this.deck.pop()!)
  }

// this method will basically hand over the control to the dealer
  playerStand() {
    // this loop makes the dealer hit till score is <= 16
    while(this.calculateScore(this.dealer.cards) < 17) {
        this.dealer.hit(this.deck.pop()!);
    }
    return this.determineWinner();
  }

  calculateScore(cards: card[]): number {
    let score = 0;
    let aces = 0;

    for(let card of cards) {
        if (card.ranks === 'ace') {
            aces++;
            score += 11;
        }
        else if (['jack', 'queen', 'king'].includes(String(card.ranks))) {
            score += 10;
        }
        else {
            score += Number(card.ranks)
        }
    }

    while(score > 21 && aces > 0) {
        score -= 10;
        aces--;
    }
    return score;
  }

  determineWinner(): string {
    const playerScore = this.calculateScore(this.player.cards);
    const dealerScore = this.calculateScore(this.dealer.cards);

    if (playerScore > 21) return "Dealer wins - Player Busted";
    if (dealerScore > 21) return "You win - Dealer Busted";

    if(playerScore > dealerScore) return "You win";
    if(dealerScore > playerScore) return "Dealer wins";

    return "Push (tie)";
  }

  getPlayerScore(): number {
    return this.calculateScore(this.player.cards)
  }

  getDealerScore(): number {
    return this.calculateScore(this.dealer.cards)
  }

  getPlayerCards() {
    return this.player.cards
  }
  
  getDealerCards() {
    return this.dealer.cards
  }
}

export default Game;
