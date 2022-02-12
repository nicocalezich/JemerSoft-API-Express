const { Router } = require('express');
const { getPokemons } = require("../controllers/pokemons");

const router = Router()

router.get('/', getPokemons);

module.exports = router;
