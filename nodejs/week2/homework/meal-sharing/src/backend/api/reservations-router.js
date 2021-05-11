const router = require('express').Router();
const reservations = require("../data/reservations.json");

router.get("/reservations", (req, res) => {
    res.send(reservations);
});
router.get("/reservations/:id", (req, res) => {
    const reservationId = Number(req.params.id);
    const reservationsById = reservations.filter((reservation) => reservation.id === reservationId);
    res.send(reservationsById);
});

module.exports = router;