import redis from "redis";

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.client.connect();

    this.client.on("error", (err) => {
      console.error(`Redis client error: ${err}`);
    });
  }

  /**
   * Checks if Redis client is alive
   * @returns {boolean} True if Redis client is connected, false otherwise
   */
  isAlive() {
    return this.client.isOpen;
  }

  /**
   * Gets the value associated with a key from Redis
   * @param {string} key - The Redis key
   * @returns {Promise<string | null>} The value for the key or null if the key doesn't exist
   */
  async get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  /**
   * Sets a key-value pair in Redis with expiration
   * @param {string} key - The Redis key
   * @param {string} value - The value to store
   * @param {number} duration - The expiration duration in seconds
   * @returns {Promise<void>}
   */
  async set(key, value, duration) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, "EX", duration, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  /**
   * Deletes a key-value pair from Redis
   * @param {string} key - The Redis key to delete
   * @returns {Promise<void>}
   */
  async del(key) {
    return new Promise((resolve, reject) => {
      this.client.del(key, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }
}

// Create and export an instance of RedisClient
export default RedisClient();
