const { pool } = require("../config/events");
// const { Client } = require("pg");
// console.log("start");

const createEvent = async (title, description, date, link) => {
  console.log("in model");
  const query = `
      INSERT INTO events (title, description, date, link)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

  const values = [title, description, date, link];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

const getAllEvents = async () => {
  // const events = new Client({
  //   user: "postgres",
  //   database: "events",
  //   password: "postgres",
  //   port: 5432,
  // });

  const query = "SELECT * FROM events";
  try {
    // await pool.connect();
    const result = await pool.query(query);
    console.log("Connected to the database!");
    // console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error getting all events:", error);
    throw error;
  }
};

getAllEvents();

module.exports = {
  createEvent,
  getAllEvents,
};
