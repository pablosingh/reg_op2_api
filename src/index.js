import app from './app.js';
import sequelize from './database/database.js';
import { initialCriptoLoadingCMC, programarEjecucionDiaria } from './controllers/initDBcmc.controllers.js';
import { getdifDate } from './controllers/getActualPrice.controllers.js';
import { config } from 'dotenv';
const port = process.env.PORT || 3002;

import Holding from './models/Holding.js';
import Operation from './models/Operation.js';
import Cripto from './models/Cripto.js';
import User from './models/User.js';

User.hasMany(Holding, { foreinkey: "UserId" });
Holding.belongsTo(User, { foreignKey: 'UserId'});

Holding.hasMany(Operation, { foreinkey: "HoldingId" });
Operation.belongsTo(Holding, { foreignKey: 'HoldingId' });

sequelize.sync({ force: true })
    .then( () => {
        app.listen(port, async () => {
            console.log('Server on port ', port);
            // const difference = await getdifDate();
            // if( difference>=1 ) 
            initialCriptoLoadingCMC();
            programarEjecucionDiaria();
        });
    })
    .catch( e => console.error(e) );

// CREATE TABLE "Criptos2" AS SELECT * FROM "Criptos";
// ==================================================================
// app.get('/', (req, res) => {
//     res.send('¡Hola, mundo!');
// });
  
// app.listen(port, () => {
//     console.log(`Servidor escuchando en http://localhost:${port}`);
// });