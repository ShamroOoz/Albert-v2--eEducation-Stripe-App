export default async function handler(req, res) {
  // Run cors
  await cors(req, res);
  res.status(200).json({ name: "John Doe" });
}
