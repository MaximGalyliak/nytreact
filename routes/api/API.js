const router = require("express").Router();
const request = require("request");

//matches with api/nyt/:term
router.route("/:term").get((req, res) => {
  request.get(
    {
      url: process.env.NYT_API_URL,
      qs: {
        "api-key": process.env.NYT_API_KEY,
        q: req.params.term,
        sort: "newest",
        fl: "headline, web_url, snippet, pub_date",
        page: 0,
      },
    },
    function(err, response, body) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        body = JSON.parse(body);
        res.json(body.response.docs);
      }
    }
  );
});
module.exports = router;
