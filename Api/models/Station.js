const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  name: String,
  code: String,
  latitude: Number,
  longitude: Number
});

module.exports = mongoose.model("Station", stationSchema);




// let station = [
//      {
//         "name": "Mangal Pandey Hall BRTS",
//         "code": "MPH",
//         "latitude": 21.165680,
//         "longitude": 72.872288
//     },
//      {
//         name: "Sahara Darwaja",
//         code: "SD",
//         latitude: 21.194746,
//         longitude: 72.844076
//     },
// ]