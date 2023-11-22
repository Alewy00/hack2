const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventController");

router.get("/all", eventsController.getAllEvents);

// router.get("/test", (req, res) => {
//   res.send("Test route is working!");
// });

router.post("/create", eventsController.createEvent);

module.exports = router;
