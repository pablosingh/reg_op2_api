import { Sequelize } from "sequelize";

const sequelize = new Sequelize('pokemon','postgres','passw',{
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;