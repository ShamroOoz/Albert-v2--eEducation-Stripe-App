export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(403).json({ message: "Mehtod not match" });
  }
  res.status(200).json({ name: "John Doe" });
}
