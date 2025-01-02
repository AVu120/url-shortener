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
  if (req.method === "GET") {
    const response = await db.urls.findFirst({
      where: {
        shortUrlID: req.query.id as string,
      },
    });
    if (!response) {
      return res.status(404).json({ message: "Short URL Not Found" });
    }

    return res.redirect(301, response.longUrl);
  }
}
