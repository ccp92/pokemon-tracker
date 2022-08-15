// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Pokemon = {
  name: string;
  owned: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  res.status(200).json([
    { name: "Pikachu", owned: true },
    { name: "Charmander", owned: false },
  ]);
}
