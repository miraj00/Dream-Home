// const router = require("express").Router();
// const sequelize = require("../config/connection");
// const axios = require("axios");
// // const { propertyType , location} = require('../public/javascript/house-search')

// router.get("/forsale", (req, res) => {
//   const options = {
//     method: "GET",
//     url: "https://realty-in-us.p.rapidapi.com/properties/list-for-sale",
//     params: {
//       state_code: "NY",
//       city: "New York City",
//       offset: "0",
//       limit: "20",
//       sort: "relevance",
//     },
//     headers: {
//       "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
//       "x-rapidapi-key": "46c4c85120mshb128887db4ffa70p145b34jsn9d69bb1b5a1f",
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data.listings[0]);
//       res.render("houses", { property: response.data.listings });
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// });


// module.exports = router;

