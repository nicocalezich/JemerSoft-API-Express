const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080; 

app.use(cors({
    origin: '*'
}));

const pokemonsRoute = require('./routes/pokemons');

app.use(express.json());
app.use('/pokemons', pokemonsRoute);


// start the Express server
app.listen( port, async () => {
    console.log( `server started at http://localhost:${ port }` );
} );