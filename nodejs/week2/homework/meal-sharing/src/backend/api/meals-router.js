const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/:id", (req, res) => {
  const mealId = Number(req.params.id);
  const mealById = meals.filter((meal) => meal.id == mealId);
  if (mealById.length > 0) {
      res.send(mealById);
  }
  else {
      res.status(404).send(`No results of the id: ${mealId}`);
  }
});

router.get("/", (req, res) => {

  if (req.query.maxPrice) {
      const maxPrice = Number(req.query.maxPrice);
      const cheapMeals = meals.filter((meal) => meal.price < maxPrice);
      res.send(cheapMeals);
  }
  else if (req.query.title) {
      const mealTitle = (req.query.title).toLowerCase();
      const mealsByTitle = meals.filter((meal) => meal.title.toLowerCase().includes(mealTitle));
      res.send(mealsByTitle);
  }
  else if (req.query.createdAfter) {
      const creationDate = new Date(req.query.createdAfter);
      const mealsByAfterDate = meals.filter((meal) => new Date(meal.created) > creationDate);
      res.send(mealsByAfterDate);
  }
  else if (req.query.limit) {
      const limit = Number(req.query.limit);
      const mealsByLimit = meals.slice(0, limit);
      res.send(mealsByLimit);
  }
  
  else {
      res.status(404).send('Error 404');
  }
});


module.exports = router;
