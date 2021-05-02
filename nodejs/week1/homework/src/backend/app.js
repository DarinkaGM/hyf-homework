const express = require("express");
const app = express();
const randomItem = (xs) => xs[Math.floor(Math.random() * xs.length)];

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require(".data/reviews");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

const reviewedMeals = meals.map((meal) =>{
  meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  return meal;
})

app.get("/meals", async (request, response) => {
  response.send(reviewedMeals);
});

app.get("/meal", async (request, response) => {
  response.send(randomItem(reviewedMeals));
});

app.get("/cheap-meals", async (request, response) => {
  response.send(reviewedMeals.filter((meal) => meal.price < 50));
});

app.get("/large-meals", async (request, response) => {
  response.send(reviewedMeals.filter((meal) => meal.maxNumberOfGuests > 5));
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(randomItem(reservations));
});

module.exports = app;
