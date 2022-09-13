// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  data: any;
};

const lat = -31.42;
const lon = -64.18;
const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?";
const url =
  baseUrl +
  `lat=${lat}` +
  "&" +
  `lon=${lon}` +
  "&" +
  `appid=${process.env.API_KEY}`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: "Make the request here" });
}
