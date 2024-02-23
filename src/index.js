import app from './app.js';
import database from './database.js';

app.listen(process.env.PORT,()=> {
    console.log('Starting at the port: '+ process.env.PORT)

});




