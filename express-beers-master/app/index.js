var express = require('express');
var app = express();
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require("body-parser");
var cors = require('cors');
app.use(cors());


/*var port =3000;
var db;
var url = 'mongodb://localhost:27017/';

app.use(express.json());
app.use(express.urlencoded());

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  db=client.db("sport")
  });

app.get('/trainingVideo', function (req, res) {
  console.log('Received request for sport from', req.ip);

  db.collection("trainingVideo").find({},{_id:0}).toArray(function(error, results)
  {
    if (error) throw error;
    res.send(results);
  });
});*/
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/nutrition/add', function (req, res){
  //var food=req.body;
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('training').insertOne({
      "id": req.body.id, 
      "name": req.body.name, 
      "type": req.body.type, 
      "link": req.body.link,
      "description": req.body.description, 
      "level": req.body.level
    });
    db.close();
  });
}); 

//Nutrition
var findFood = function(db, nutritionList,  callback) {
  var cursor =db.collection('nutrition').find({},{_id:0});
  cursor.each(function(err, doc) {
     assert.equal(err, null);
     if (doc != null) {
        nutritionList.push(doc);
     } else {
        callback();
     }
  });
};

app.get('/nutrition', function (req, res) {
 console.log('Received request for sport from', req.ip)

 MongoClient.connect(url, function(err, db) {
   assert.equal(null, err);
   var nutritionList = [];
   findFood(db, nutritionList, function() {
     res.json(nutritionList);
     db.close();
   });

 });
});

var findFoodItem= function(db, foodId, callback) {
  var cursor =db.collection('nutrition').find({id : foodId},{_id: 0});
  var food;
  cursor.each(function(err, doc) {
     assert.equal(err, null);
     if (doc != null) {
       food = doc;
       res.json(food);
     } else {
        callback(food);
     }
  });
};

app.get('/nutrition/:foodId', function (req, res) {
  console.log('Received request for '+req.param('foodId')+' from', req.ip)
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findFoodItem(db, req.param('foodId'),  function(food) {
      console.log(food)
      res.json(food);
      db.close();
    });
  });
});
//Training
var findTrainingvideo = function(db, videoList,  callback) {
   var cursor =db.collection('training').find({},{_id:0});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         videoList.push(doc);
      } else {
         callback();
      }
   });
};

app.get('/trainingVideo', function (req, res) {
  console.log('Received request for sport from', req.ip)

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    var videoList = [];
    findTrainingvideo(db, videoList, function() {
      res.json(videoList);
      db.close();
    });

  });
});



var findTrainingVideo= function(db, videoId, callback) {
  var cursor =db.collection('training').find({id : videoId},{_id: 0, link:0});
  var video;
  cursor.each(function(err, doc) {
     assert.equal(err, null);
     if (doc != null) {
       video = doc;
       res.json(video);
     } else {
        callback(video);
     }
  });
};

app.get('/trainingVideo/:videoId', function (req, res) {
  console.log('Received request for '+req.param('videoId')+' from', req.ip)
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findTrainingVideo(db, req.param('videoId'),  function(video) {
      console.log(video)
      res.json(video);
      db.close();
    });

  });
});

app.use('/images', express.static('images'));

var url = 'mongodb://localhost:27017/sport';



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});

