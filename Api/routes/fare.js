const express = require("express");
const Station = require("../models/Station");
const router = express.Router();

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

router.get("/fare", async (req, res) => {
  const { from, to } = req.query;

  const fromStation = await Station.findById(from);
  const toStation = await Station.findById(to);

  const distance = getDistance(
    fromStation.latitude,
    fromStation.longitude,
    toStation.latitude,
    toStation.longitude
  );

  const price = Math.round(distance * 2); // ₹2 per km

  res.json({ distance, price });
});

module.exports = router;
