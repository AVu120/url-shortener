import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";

type ResponseData = {
  message?: string;
  shortUrlID?: string; // Add the missing property
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === "POST") {
    const { url }: { url: string } = JSON.parse(req.body);
    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }

    const randomShortUrlID = Math.random().toString(36).substring(6);
    const response = await db.urls.create({
      data: {
        longUrl: url,
        shortUrlID: randomShortUrlID,
      },
    });
    return res.status(200).json({ shortUrlID: response.shortUrlID });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
