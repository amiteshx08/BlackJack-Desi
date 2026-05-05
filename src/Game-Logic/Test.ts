import Game from "./Game";

const game = new Game();

console.log("Player cards:", game.getPlayerCards());
console.log("Player score:", game.getPlayerScore());
console.log("Dealer cards:", game.getDealerCards());

game.playerHit();
console.log("After hit - Player score:", game.getPlayerScore());

const result = game.playerStand();
console.log(result);