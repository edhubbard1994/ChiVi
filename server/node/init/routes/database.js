const mongoose = require('mongoose')
const promise = global.Promise;
const Schema = mongoose.Schema
mongoose.createConnection("mongodb://localhost:27017/chivi");
pointSchema = new Schema({
    title: String,
    author: String,
    category: String,
    post: String,
    lat: Number,
    lon: Number,
    comments: [{author: String, body: String}]
});
pointSchema.index({id:1});
var Point = mongoose.model('Point', pointSchema);
mongoose.connect("mongodb://localhost:27017/chivi", {useNewUrlParser: true}).then(()=>{
    
    console.log('connected to db');
}).catch((err)=>{
    console.log(err);
});



module.exports = Point

