const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/chivi");

class DB{
   
    constructor(){
        this.conn = mongoose;
        this.pointSchema = {
            id: 1,
            title: String,
            category: String,
            post: String,
            lat: Number,
            lon: Number,
            comments: [{author: String, body: String}]
        };
        this.db = this.conn.model('Point',this.pointSchema);
    }

    addPoint(point){
        this.db.create(point);
    }

    getPoints(){
        return this.db.find().all();
    }

    getPoint(point){
        return this.db.find(point);
    }

    makePoint(){
        return this.pointSchema;
    }

}

module.exports = DB;