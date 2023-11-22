const eventModel = require("../models/eventModel");

const createEvent = async (req, res) => {
  try {
    const { title, description, date, link } = req.body;
    console.log("controller");

    const newEvent = await eventModel.createEvent(
      title,
      description,
      date,
      link
    );
    res.status(201).json({ message: "Event created", event: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllEvents = async (req, res) => {
  try {
    console.log("in coontrollers");
    const events = await eventModel.getAllEvents();
    // console.log("conrtoler =>" + events);
    res.status(200).json({ events });
  } catch (error) {
    console.error("Error getting all events:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
};
