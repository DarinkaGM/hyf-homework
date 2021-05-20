const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true
}));
app.use(express.json());

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/:method", (req, res) => {
    if (req.params.method === "add") {
<<<<<<< HEAD
      const sumResult = addition(req);
      res.send(sumResult);
=======
      let sumResult = addition(req);
      res.send(`${sumResult}`);
>>>>>>> f2a2a14f2ec1354eba1d81b1d9c5abc916c3b969
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
  
  function divide (req, res) {
      let values = Object.values(req.body).flat().map(n=> Number(n))
      let product = values.reduce((a,b) => a / b)
      res.send(`${product}`)
  }
  
  function multiply(req,res) {
    let values = Object.values(req.body).flat().map(n=> Number(n))
    let product = values.reduce((a,b) => a * b)
    res.send(`${product}`)
  }
  
  function subtract(req, res) {
    let values = Object.values(req.body).flat().map(n=> Number(n))
    let difference = values.reduce((a,b) => a - b)
    res.send(`${difference}`)
  }
  
  function addition(req, res) {
    let values = Object.values(req.body).flat().map(n=> Number(n))
    let sum = values.reduce((a,b) => a + b)
    res.send(`${sum}`)
  }

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
