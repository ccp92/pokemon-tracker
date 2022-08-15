// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Pokemon = {
  id: number;
  name: string;
  owned: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  res.status(200).json([
    { id: 25, name: "Pikachu", owned: true },
    { id: 1, name: "Bulbasaur", owned: false },
  ]);
}
