import { Sequelize } from "sequelize";
import { config } from 'dotenv';
config();
const DATABASE_URL = process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL,{
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
        require: true, // Requiere SSL
        rejectUnauthorized: false // Establecer en true si el certificado es válido
        }
    }
});

// export const sequelize = new Sequelize('portafoliotest','postgres','postgres',{
//     host: 'localhost',
//     dialect: 'postgres',
// });

export default sequelize;