const router = require("express").Router();
const acervo = require("../data/acervo.json");

router.get("/acervo", (req, res) => {
    res.json(acervo);
});

module.exports = router;