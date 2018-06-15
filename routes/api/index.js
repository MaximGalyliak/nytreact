const router = require("express").Router();
const api_routes = require("./API");

// new york times api route
router.use("/nyt", api_routes);

module.exports = router;
