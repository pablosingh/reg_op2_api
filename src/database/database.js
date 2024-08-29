import { Sequelize } from "sequelize";
import { config } from 'dotenv';
config();
const DATABASE_URL = process.env.DATABASE_URL;
const POSTGRES_URL = process.env.POSTGRES_URL;

// const sequelize = new Sequelize(DATABASE_URL,{
//     dialect: 'postgres',
//     logging: false,
//     dialectOptions: {
//         ssl: {
//         require: true, // Requiere SSL
//         rejectUnauthorized: false // Establecer en true si el certificado es válido
//         }
//     }
// });
// ============================================================================
// const sequelize = new Sequelize('portafoliotest','postgres','postgres',{
//     host: 'localhost',
//     dialect: 'postgres',
// });
// ============================================================================
const sequelize = new Sequelize(process.env.POSTGRES_URL,{
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
        require: true, // Requiere SSL
        rejectUnauthorized: false // Establecer en true si el certificado es válido
        }
    }
});
export default sequelize;