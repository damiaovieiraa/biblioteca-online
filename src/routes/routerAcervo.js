const router = require("express").Router();
const controllerAcervo = require("../controllers/controllerAcervo");

router.get("/livros", controllerAcervo.getAll);
router.get("/livro/:id", controllerAcervo.getId);
router.get("/livros/:category", controllerAcervo.getCategory);

module.exports = router;