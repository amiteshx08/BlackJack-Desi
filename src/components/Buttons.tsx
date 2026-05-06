import { useRef } from "react";
import Game from "../game-logic/Game";

export const Buttons = () => {
  // Storing the game state
  const gameRef = useRef<Game>(null);
  if (!gameRef.current) {
    gameRef.current = new Game();
  }
  function handleHit() {
    const game = gameRef.current;
    if (!game) return;

    game.playerHit();

    console.log("Player score after hit:", game.getPlayerScore());
    if (game.getPlayerScore() > 21) {
      const winner = game.determineWinner();
      console.log("🚨 Player busted! Winner:", winner);
    } else {
      console.log("Game still active you can hit or stand.");
    }
  }

  function handleStand() {
    const game = gameRef.current;
    if (!game) return;

    const winnerMessage = game.playerStand(); // dealer draws, returns winner string
    console.log("Game over. Result:", winnerMessage);
    console.log("Final player score:", game.getPlayerScore());
    console.log("Final dealer score:", game.getDealerScore());
    console.log("Dealer cards:", game.getDealerCards());
  }

  return (
    <div className="fixed bottom-8 flex justify-between w-full px-8">
      <button
        className="bg-yellow-500 hover:bg-yellow-600 active:scale-95
       py-3 px-8 text-2xl font-bold rounded-full shadow-lg
        transition-all duration-200 transform hover:scale-105
         cursor-pointer"
        onClick={handleHit}
      >
        HIT
      </button>

      <button
        className="bg-red-600 hover:bg-red-700 active:scale-95
       py-3 px-8 text-2xl font-bold rounded-full shadow-lg
        text-white transition-all duration-200 transform hover:scale-105
         cursor-pointer"
        onClick={handleStand}
      >
        STAND
      </button>
    </div>
  );
};
