/*
CSC3916 HW2
File: server.js
Description: Web API scaffolding for Movie API
*/

require('dotenv').config(); 

var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var passport = require("passport");
var authController = require("./auth");
var authJwtController = require("./auth_jwt");
var db = require("./db"); 
var jwt = require("jsonwebtoken");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

var router = express.Router();


function getJSONObjectForMovieRequirement(req) {
  var json = {
    headers: "No headers",
    key: process.env.UNIQUE_KEY,
    body: "No body",
  };

  if (req.body != null) {
    json.body = req.body;
  }

  if (req.headers != null) {
    json.headers = req.headers;
  }

  return json;
}


router.post("/signup", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({
      success: false,
      msg: "Please include both username and password to signup.",
    });
  } else {
    var newUser = {
      username: req.body.username,
      password: req.body.password,
    };

    db.save(newUser); 
    res.json({ success: true, msg: "Successfully created new user." });
  }
});


router.post("/signin", (req, res) => {
  var user = db.findOne(req.body.username);

  if (!user) {
    res
      .status(401)
      .send({ success: false, msg: "Authentication failed. User not found." });
  } else {
    if (req.body.password == user.password) {
      var userToken = { id: user.id, username: user.username };
      var token = jwt.sign(userToken, process.env.UNIQUE_KEY, { expiresIn: '1h' });
      res.json({ success: true, token: "JWT " + token });
    } else {
      res.status(401).send({ success: false, msg: "Authentication failed." });
    }
  }
});


router
  .route("/testcollection")
  .delete(authController.isAuthenticated, (req, res) => {
    console.log(req.body);
    res = res.status(200);
    if (req.get("Content-Type")) {
      res = res.type(req.get("Content-Type"));
    }
    var o = getJSONObjectForMovieRequirement(req);
    res.json(o);
  })
  .put(authJwtController.isAuthenticated, (req, res) => {
    console.log(req.body);
    res = res.status(200);
    if (req.get("Content-Type")) {
      res = res.type(req.get("Content-Type"));
    }
    var o = getJSONObjectForMovieRequirement(req);
    res.json(o);
  });


router
  .route("/movies")
  .get((req, res) => {
    var o = getJSONObjectForMovieRequirement(req);
    o.status = 200;
    o.message = "GET movies";
    o.headers = req.headers;
    o.query = req.query;
    o.env = process.env.UNIQUE_KEY;
    res.json(o);
  })
  .post((req, res) => {
    var o = getJSONObjectForMovieRequirement(req);
    o.status = 200;
    o.message = "movie saved";
    o.headers = req.headers;
    o.query = req.query;
    o.env = process.env.UNIQUE_KEY;
    res.json(o);
  })
  .put(authJwtController.isAuthenticated, (req, res) => {
    var o = getJSONObjectForMovieRequirement(req);
    o.status = 200;
    o.message = "movie updated";
    o.headers = req.headers;
    o.query = req.query;
    o.env = process.env.UNIQUE_KEY;
    res.json(o);
  })
  .delete(authController.isAuthenticated, (req, res) => {
    var o = getJSONObjectForMovieRequirement(req);
    o.status = 200;
    o.message = "movie deleted";
    o.headers = req.headers;
    o.query = req.query;
    o.env = process.env.UNIQUE_KEY;
    res.json(o);
  })
  .all((req, res) => {
    res.status(405).send({ message: "HTTP method not supported." });
  });

app.use("/", router);
app.listen(process.env.PORT || 8080);
module.exports = app; 



