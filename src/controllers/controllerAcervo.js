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
       return res.json({ message: "id does not exist" });
    } 
};

const getCategory = (req, res) => {
    const { category } = req.params;
    const filterCategory = acervo.livros.filter((filme) => filme.categoria == category);
    return res.json(filterCategory);
};

module.exports = {
    getAll,
    getId,
    getCategory
};