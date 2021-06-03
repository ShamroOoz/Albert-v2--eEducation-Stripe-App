export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(403).json({ message: "Mehtod not match" });
  }
}
