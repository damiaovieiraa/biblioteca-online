const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('livro', {
    id_livro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    autor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    editora: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ano_publicacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "isbn"
    },
    quantidade_disponivel: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'livro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_livro" },
        ]
      },
      {
        name: "isbn",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "isbn" },
        ]
      },
    ]
  });
};
