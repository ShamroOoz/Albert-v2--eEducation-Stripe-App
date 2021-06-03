// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);
  res.status(200).json({ name: "John Doe" });
}
