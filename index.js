const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.json(req.body);
  } catch (error) {
    console.log(error);
  }
});

app.get("/ganjil", (req, res) => {
  try {
    const number = req.body.number;
    let ganjil = [];
    for (var i = 0; i < number; i++) {
      if (number[i] % 1) {
        ganjil.push(number[i]);
      }
    }

    res.json(ganjil);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("Server connection....");
});
