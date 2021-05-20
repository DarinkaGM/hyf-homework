const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true
}));
app.use(express.json());

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/:method", (req, res) => {
    if (req.params.method === "add") {
      let sumResult = addition(req);
      res.send(`${sumResult}`);
    } else if (req.params.method === "subtract") {
      const substraction = subtract(req);
      res.send( substraction);
    } else if (req.params.method === "multiply") {
      const multiplication = multiply(req);
      res.send(multiplication);
    } else if (req.params.method === "divide") {
      const division = divide(req);
      res.send(division);
    }
  });
  
app.post("/calculator/:method", (req, res) => {
  const numbers = Object.values(req.body)
    .flat()
    .map((number) => Number(number));
  if (req.params.method === "multiply") {
    const multiplication = numbers.reduce((acc, value) => acc * value);
    res.send({ multiplication });
  } else if (req.params.method === "divide") {
    const division = numbers.reduce((acc, value) => acc / value);
    res.send({ division });
  }
});
  
  function divide(req) {
    let product = 1;
    for (var param in req.query) {
      product = Number(req.query[param]) / product;
    }
    return product;
  }
  
  function multiply(req) {
    let product = 1;
    for (var param in req.query) {
        product = Number(req.query[param]) * product;
      }
    
    return product;
  }
  
  function subtract(req) {
    let difference = 0;
    for (var param in req.query) {
      difference = Number(req.query[param]) - difference;
      }  return difference;
  }
  
  function addition(req) {
    let sum = 0;
    for (var param in req.query) {
       sum = sum + Number(req.query[param]);
      }
    return sum;
  }

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
