import app from './app.js';
import sequelize from './database/database.js';

async function main(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(3001);
        console.log("listen on port 3001");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    };
};

main();