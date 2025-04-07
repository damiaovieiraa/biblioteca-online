var DataTypes = require("sequelize").DataTypes;
var _emprestimo = require("./emprestimo");
var _historicoacessos = require("./historicoacessos");
var _livro = require("./livro");
var _notificacoes = require("./notificacoes");
var _reserva = require("./reserva");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var emprestimo = _emprestimo(sequelize, DataTypes);
  var historicoacessos = _historicoacessos(sequelize, DataTypes);
  var livro = _livro(sequelize, DataTypes);
  var notificacoes = _notificacoes(sequelize, DataTypes);
  var reserva = _reserva(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  emprestimo.belongsTo(livro, { as: "id_livro_livro", foreignKey: "id_livro"});
  livro.hasMany(emprestimo, { as: "emprestimos", foreignKey: "id_livro"});
  reserva.belongsTo(livro, { as: "id_livro_livro", foreignKey: "id_livro"});
  livro.hasMany(reserva, { as: "reservas", foreignKey: "id_livro"});
  emprestimo.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(emprestimo, { as: "emprestimos", foreignKey: "id_usuario"});
  historicoacessos.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(historicoacessos, { as: "historicoacessos", foreignKey: "id_usuario"});
  notificacoes.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(notificacoes, { as: "notificacos", foreignKey: "id_usuario"});
  reserva.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(reserva, { as: "reservas", foreignKey: "id_usuario"});

  return {
    emprestimo,
    historicoacessos,
    livro,
    notificacoes,
    reserva,
    usuario,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
