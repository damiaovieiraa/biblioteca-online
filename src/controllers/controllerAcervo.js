const acervo = require("../data/acervo.json");

const getAll = (req, res) => {
    return res.json(acervo.livros);
};

const getId = (req, res) => {
    const { id } = req.params;
    const foundBook = acervo.livros.find((filme) => filme.id == id);
    if (foundBook != undefined) {
        return res.json(foundBook);
    } else {
       return res.json([]);
    } 
};

const getCategoria = (req, res) => {
    const { categoria } = req.params;
    const filterCategory = acervo.livros.filter(filme => filme.categoria.toLowerCase() == categoria.toLowerCase());
    return res.json(filterCategory);
};

const getPreco = (req, res) => {
    const { precoMaximo } = req.params;
    const filterPreco = acervo.livros.filter(filme => filme.preco <= precoMaximo);
    return res.json(filterPreco);
};

const getAno = (req, res) => {
    const { ano } = req.params;
    const filterAno = acervo.livros.filter(filme => filme.ano == ano);
    return res.json(filterAno);
};

module.exports = {
    getAll,
    getId,
    getCategoria,
    getPreco,
    getAno
};