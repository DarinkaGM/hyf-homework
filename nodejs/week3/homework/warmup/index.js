const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true
}));
app.use(express.json());

app.get("/", (req, res) => res.send("NodeJS week3"));

app.get("/calculator/:method", (req, res) => {
 
  if (Object.keys(req.query).length > 0) {

    const numbers = Object.values(req.body).flat().map((n) => Number(n));
    const valueNotNum = numbers.every(n => !Number.isNaN(n));
        
        if (valueNotNum) {
          res.send('All values must be numbers');
        }
        else if (req.params.method === "add") {
          const sumResult = numbers.reduce((acc, value) => acc + value);
          res.send(`${sumResult}`);
        }
        else if (req.params.method === "multiply") {
          const substraction = numbers.reduce((acc, value) => acc - value);
          res.send(`${substraction}`);
        }
        else if (req.params.method === "multiply") {
          const multiplication = numbers.reduce((acc, value) => acc * value);
          res.send(`${multiplication}`)
        } 
        else if (req.params.method === "divide") {
          const division = numbers.reduce((acc, value) => acc / value);
          res.send(`${division}`);
  }
  });

app.post("/calculator/:method", (req, res) => {
  const numbers = Object.values(req.body).flat().map((n) => Number(n));
  const valueNotNum = numbers.every(n => !Number.isNaN(n));
      
  if (valueNotNum) {
    res.send('All values must be numbers');
  }
  else if (req.params.method === "add") {
    const sumResult = numbers.reduce((acc, value) => acc + value);
    res.send(`${sumResult}`);
  }
  else if (req.params.method === "multiply") {
    const substraction = numbers.reduce((acc, value) => acc - value);
    res.send(`${substraction}`);
  }
  else if (req.params.method === "multiply") {
    const multiplication = numbers.reduce((acc, value) => acc * value);
    res.send(`${multiplication}`)
  } 
  else if (req.params.method === "divide") {
    const division = numbers.reduce((acc, value) => acc / value);
    res.send(`${division}`);
}
});
  
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
