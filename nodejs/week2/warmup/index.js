const express = require("express");
const app = express();

app.get("/numbers/multiply/:first/:second", (req, res) => {
    const a = Number(req.query.first);
    const b = Number(req.query.second);
    const sum = a + b;
    res.send(`${sum}`);

});

app.get("/numbers/multiply/:first/:second", (req, res) => {
    const a = Number(req.query.first);
    const b = Number(req.query.second);
    const multiplied = a * b;
    res.send(`${multiplied}`);
});
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));