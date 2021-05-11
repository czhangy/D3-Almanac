const BlizzAPI = require("blizzapi");
const router = require("express").Router();

router.route("/:class").get(async (req, res) => {
  try {
    // BlizzAPI setup
    const api = new BlizzAPI({
      region: "us",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });
    console.log("Request URL: " + `/d3/data/hero/${req.params.class}`);
    const endpoint = `/d3/data/hero/${req.params.class}`;
    const response = await api.query(endpoint);
    res.json(response);
  } catch (error) {
    res.status(400).send({
      error: "Failed to receive BNet API data",
    });
  }
});

module.exports = router;