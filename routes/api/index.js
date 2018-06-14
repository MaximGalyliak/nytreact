const router = require("express").Router();
const aritcle_routes = require("./Articles");

// Book routes
router.use("/articles", aritcle_routes);

module.exports = router;
