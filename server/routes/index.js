/**
 * Express router for handling routes.
 * @module routes/index
 */

import express from "express";
import { getConnect, getDisconnect } from "../controllers/AuthController.js";
import { healthCheck } from "../controllers/healthCheck.js";

const router = express.Router();

/**
 * Route for connecting to a user.
 * @name GET /connect
 * @function
 */
router.get("/connect", getConnect);

/**
 * Route for disconnecting from a user.
 * @name GET /disconnect
 * @function
 */
router.get("/disconnect", getDisconnect);

router.get("/health", healthCheck);

export default router;
