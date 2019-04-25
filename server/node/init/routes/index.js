var express = require('express');
var router = express.Router();
const db = require('./database');
/* GET home page. */
router.get('/', function(req, res, next) {
   db.find().then((points)=>{
     res.send(points);
   });
});

router.post('/add',(req,res, next)=>{
  point = req.body;
  p = new db(point).save();
  db.find().then((points)=>{
    res.send(points);
  });
});

router.put('/update',(req, res, next)=>{
  db.findByIdAndUpdate(req.body._id, req.body).then((point)=>{
    res.send("success")
  }).catch((err)=>{
    res.send("error: "+ err);
  });
});

module.exports = router;

/*{
  title:"trashcan overflow",
  Author: "that girl",
  category: "bad",
  post: "saw this horible trashcan overflow last night",
  lat: 41.862696,
  lon: -87.630067,
  commnets: [{author: "some guy", body:"I think that this is bad"}]
};*/