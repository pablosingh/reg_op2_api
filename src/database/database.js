import { Sequelize } from "sequelize";
import { config } from 'dotenv';
const DATABASE_URL = process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL,{
    dialect: 'postgres',
    logging: false
});

export default sequelize;