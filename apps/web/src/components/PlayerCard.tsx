// Placeholder. Later: avatar, rating, captured pieces, clock.
export default function PlayerCard({
  name,
  color,
}: {
  name: string;
  color: "White" | "Black";
}) {
  return (
    <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-4">
      <p className="font-medium">{name}</p>
      <p className="text-sm text-foreground/60">Playing {color}</p>
    </div>
  );
}
