var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

let data = [
  {
    id: 1,
    caption: "Поесть",
    done: true,
    date: "01.01.2000",
  },
  {
    id: 2,
    caption: "Поспать",
    done: false,
    date: "01.01.2000",
  },
  {
    id: 3,
    caption: "Попить",
    done: false,
    date: "01.01.2000",
  },
  {
    id: 4,
    caption: "Поработать",
    done: false,
    date: "01.01.2000",
  },
];

app.get("/api", function (req, res) {
  setTimeout(function () {
    res.send(data);
  }, 2000);
});

app.get("/api/:id", function (req, res) {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.id == req.params.id) {
      res.send(element);
      return;
    }
  }
});

app.post("/api/", function (req, res) {
  data.push(req.body);
  res.send(data);
});

app.put("/api/:id", function (req, res) {
  if (req.params.id == 3) {
    res.status(500).send();
    return;
  }
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.id == req.params.id) {
      element.done = !element.done;
      res.status(200).send(element);
      return;
    }
  }
});

app.delete("/api/:id", function (req, res) {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.id == req.params.id) {
      data.splice(index, 1);
      break;
    }
  }
  res.send(data);
});

app.listen(3000, function () {
  console.log("Server listening on port 3000!");
});
