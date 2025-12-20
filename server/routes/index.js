/**
 * Express router for handling routes.
 * @module routes/index
 */

const express = require("express");

const router = express.Router();

const AuthController = require("../controllers/AuthController");

/**
 * Route for connecting to a user.
 * @name GET /connect
 * @function
 */
router.get("/connect", AuthController.getConnect);

/**
 * Route for disconnecting from a user.
 * @name GET /disconnect
 * @function
 */
router.get("/disconnect", AuthController.getDisconnect);
