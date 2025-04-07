const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emprestimo', {
    id_emprestimo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    },
    id_livro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'livro',
        key: 'id_livro'
      }
    },
    data_emprestimo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_devolucao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Em andamento','Concluído','Atrasado'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emprestimo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_emprestimo" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_livro",
        using: "BTREE",
        fields: [
          { name: "id_livro" },
        ]
      },
    ]
  });
};
