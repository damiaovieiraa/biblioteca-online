const router = require("express").Router();
const controllerAcervo = require("../controllers/controllerAcervo");

router.get("/livros", controllerAcervo.getAll);
router.get("/livros/:id", controllerAcervo.getId);
router.get("/livros/categoria/:categoria", controllerAcervo.getCategoria);
router.get("/livros/preco/:precoMaximo", controllerAcervo.getPreco);
router.get("/livros/ano/:ano", controllerAcervo.getAno);

module.exports = router;