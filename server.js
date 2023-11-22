const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const PORT = 3000;

// const open = (await import("open")).default;
const open = require("open");

app.use(cors({ origin: "*" }));
app.use(express.static("public"));
app.use(express.json());

const eventRoutes = require("./routes/eventRoutes.js");
app.use("/events", eventRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  const htmlFilePath = "./public/source/eventPage.html";

  // Open the HTML file using the default system browser
  open(htmlFilePath, { wait: false })
    .then(() => {
      console.log("HTML file opened successfully.");
    })
    .catch((err) => {
      console.error(`Error opening HTML file: ${err.message}`);
    });
});
