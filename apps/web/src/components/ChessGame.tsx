"use client";

import { useRef, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

// A playable board for local testing: both colours are moved from the same
// screen. Networking and persistence come in later stories.
export default function ChessGame() {
  // chess.js owns the rules and the game state. It is a mutable object, so it
  // lives in a ref: changing it must not trigger a re-render by itself.
  const game = useRef(new Chess());

  // React only re-renders when state changes, so we mirror the position into
  // state as a FEN string (a one-line text description of the board).
  const [fen, setFen] = useState(game.current.fen());

  return (
    <Chessboard
      options={{
        position: fen,
        onPieceDrop: ({ sourceSquare, targetSquare }) => {
          // Piece dropped outside the board: reject, it snaps back.
          if (!targetSquare) return false;

          try {
            // chess.js throws on an illegal move, so a failed move() means
            // "not allowed". Promotion is always a queen for now.
            game.current.move({
              from: sourceSquare,
              to: targetSquare,
              promotion: "q",
            });
          } catch {
            return false;
          }

          setFen(game.current.fen());
          return true;
        },
      }}
    />
  );
}
