const yelp = require('yelp-fusion');
require("dotenv").config();
const router = require("express").Router();
const { withAuth } = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  // if(req.session.loggedIn){
  res.render("restaurant", {
    title: "Restaurants",
    pageTitle: "Restaurants"
  });
  // }
});

router.post("/restaurants", (req, res) => {
  let API_KEY = process.env.DB_API_KEY;
  console.log(API_KEY, "API KEY:")
  let zipcode = req.body.zipcode;
  let rating = req.body.rating;
  let price = req.body.price;
  let cuisine = req.body.cuisine;

  const apiKey = process.env.DB_API_KEY;

    const searchRequest = {
      term: cuisine,
      location: zipcode,
      rating: rating,
      price: price,
      limit: 5
    };
  
    const client = yelp.client(apiKey);
  
  client.search(searchRequest)
    .then((response) => {
      console.log(response.jsonBody);
    })
    .catch((error) => {
      console.log(error);
    });
  
});



module.exports = router;
