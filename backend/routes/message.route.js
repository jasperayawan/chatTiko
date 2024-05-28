const { message, getMessages } = require("../controllers/message.controller");
const protectRoute = require("../middleware/protectRoute");

const router = require("express").Router();

router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, message)

module.exports = router;