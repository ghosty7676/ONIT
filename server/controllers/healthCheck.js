import { dbClient } from "../server";

async function healthCheck(req, res) {
  try {
    await dbClient.query("SELECT 1");
    res.send("Everywhere good");
    res.status(200).json({ status: "ok" });
  } catch {
    res.status(500).json({ status: "db down" });
  }
}

export { healthCheck };
