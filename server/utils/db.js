import pkg from "pg";
const { Pool } = pkg;

/**
 * Represents a Postgres client for interacting with the database.
 */
class DBClient {
  constructor() {
    const host = process.env.DB_HOST || "localhost";
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || "onit_db";
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;

    const uri = `postgres://${host}:${port}/${database}`;
    this.client = new Pool({ host, port, user, password, database });

    this.connect();
  }

  /**
   * Connects to the MongoDB database.
   */
  connect() {
    try {
      this.client.on("connect", () => {
        console.log("Connected to database");
      });
    } catch (error) {
      console.error("Failed to connect to database:", error);
    }
  }
}

const dbClient = new DBClient();

export default dbClient;
