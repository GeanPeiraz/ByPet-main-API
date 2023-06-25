const sequelize  = require('sequelize');
const connection = require('../database/database');
const categoria = connection.define(
    'tbl_categoria',
    {
        nome_categoria:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);



//categoria.sync({force:true});

module.exports = categoria;