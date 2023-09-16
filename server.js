const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send(`<h1>99 Bottles of Beer on the Wall</h1>
    <a href="/98"> Take one down pass it around</a>`);
});

app.get("/:number_of_bottles", function (req, res) {
  const numberOfBottles = parseInt(req.params.number_of_bottles);

  if (numberOfBottles === 0) {
    res.send(`<h1>No more Bottles of beer on the wall</h1>
        <a href="/">Start Over</a>`);
  } else {
    const nextNumberOfBottles = numberOfBottles - 1;
    res.send(`<h1>${numberOfBottles} Bottle${
      numberOfBottles === 1 ? "" : "s"
    } of Beer on the Wall</h1>
        <a href="/${nextNumberOfBottles}"> Take one down, pass it around</a>
        <a href="/">Start Over</a>`);
  }
});

app.listen(port, function () {
  console.log("listening at http://localhost:" + port);
});
