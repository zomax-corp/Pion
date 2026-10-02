import { z } from "zod";

export const MoveSchema = z.object({
  gameId: z.string(),
  from: z.string(),   // e.g. "e2"
  to: z.string(),     // e.g. "e4"
  promotion: z.enum(["q", "r", "b", "n"]).optional(),
  source: z.enum(["web", "mobile", "board"]).default("web"),
});
export type Move = z.infer<typeof MoveSchema>;
