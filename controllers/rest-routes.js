const axios = require("axios");
require("dotenv").config();
const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  // if(req.session.loggedIn){
  res.render("restaurant", { title: "Restaurants" });
  // }
});

router.get("/yelp", (req, res) => {
  let API_KEY = process.env.DB_API_KEY;
  let zipcode = req.body.zipcode;
  let rating = req.body.rating;
  let price = req.body.price;
  let cuisine = req.body.cuisine;

  var config = {
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${zipcode}&rating=${rating}&price=${price}&categories=${cuisine}&limit=10`,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
