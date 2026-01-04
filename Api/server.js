let express = require("express") ;
let Station = require("./models/Station");
const bodyParser = require ('body-parser');
const cors = require('cors');

var app = express();
require("./db/config");

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json());
app.use(cors());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

var port = process.env.PORT || 2410;
app.listen(port,()=>console.log(`Listening on port ${port}!`));

app.post("/addStation", async (req, res, next) => {
    const { name,code,latitude,longitude } = req.body;
    // console.log(req.body);
    const existingSt = await Station.findOne({ code });
    
    if (existingSt) {
      return res.status(400).json({ success: false,message: 'Station already exists',});
    }
    let station = new Station({name,code,latitude,longitude });
    let result = await station.save();
  
    res.status(201).json({ success: true,result, message: 'success' });
  });


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

app.post("/fare", async (req, res) => {
  try {
    const { from, to } = req.body; // ID ya code

    const fromStation = await Station.findOne({ code: from });
    const toStation = await Station.findOne({ code: to });

    if (!fromStation || !toStation) {
      return res.status(404).json({ message: "Station not found" });
    }

    const distance = getDistance(
      fromStation.latitude,
      fromStation.longitude,
      toStation.latitude,
      toStation.longitude
    );

    const price = Math.round(distance * 1.3); // ₹2 per km

    res.json({
      from: fromStation.name,
      to: toStation.name,
      distance: distance.toFixed(2),
      price
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET all stations
app.get("/stations", async (req, res) => {
  try {
    const stations = await Station.find(); 
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
