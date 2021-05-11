const router = require('express').Router();
const reviews = require("../data/reviews.json");

router.get("/reviews", (req, res) => {
    res.send(reviews);
});
router.get("/reviews/:id", (req, res) => {
    const reviewId = Number(req.params.id);
    const reviewById = reviews.filter((meal) => meal.id === reviewId);
    res.send(reviewById);
});

module.exports = router;