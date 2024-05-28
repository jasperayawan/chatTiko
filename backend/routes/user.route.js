const { getAllUsers } = require("../Controller/user.controller");
const protectRoute = require("../middleware/protectRoute");

const router = require("express").Router();

router.get("/", protectRoute, getAllUsers);

module.exports = router;