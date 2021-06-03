// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default function helloAPI(req, res) {
  res.status(200).json({ name: "John Doe" });
}
