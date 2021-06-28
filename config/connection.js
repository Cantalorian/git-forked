require('dotenv').config();
<<<<<<< HEAD
=======
const Sequelize = require('sequelize');


let sequelize;

if(process.env.JAWSDB_URL){
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions:{
      decimalNumbers: true,
    },
    port: 8000,
  });
}

module.exports = sequelize;

>>>>>>> dc06d900277b6454a3e5a32e94cbbcd9fedece3d

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;