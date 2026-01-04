const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get(
  "/me",
  authMiddleware.authUserMiddleware,
  userController.getMyProfile
);

router.put(
  "/me",
  authMiddleware.authUserMiddleware,
  userController.updateProfile
);

router.get(
  "/me/likes",
  authMiddleware.authUserMiddleware,
  userController.getLikedFood
);

router.get(
  "/me/orders",
  authMiddleware.authUserMiddleware,
  userController.getMyOrders
);

module.exports = router;
