// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const lat = 44.34;
const lon = 10.99;
const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?";
const url = baseUrl + `lat=${lat}` + "&" + `lon=${lat}` + "&" + `appid=${process.env.API_KEY}`;
console.log(url);

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "John Doe" });
}
