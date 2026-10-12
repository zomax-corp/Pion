import type { Metadata } from "next";
import ChessGame from "@/components/ChessGame";
import PlayerCard from "@/components/PlayerCard";
import MovePanel from "@/components/MovePanel";

export const metadata: Metadata = {
  title: "Play | Pion",
};

export default function PlayPage() {
  return (
    <main className="mx-auto w-full max-w-6xl p-4 sm:p-8">
      <h1 className="mb-6 text-2xl font-semibold">Pion</h1>

      {/* One column on small screens, three columns from the lg breakpoint up */}
      <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,560px)_220px] lg:justify-center">
        <div className="flex flex-col gap-4">
          <PlayerCard name="Opponent" color="Black" />
          <PlayerCard name="You" color="White" />
        </div>

        <div className="w-full">
          <ChessGame />
        </div>

        <MovePanel />
      </div>
    </main>
  );
}
