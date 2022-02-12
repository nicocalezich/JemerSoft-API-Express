const { callApi } = require("../services/pokemons")

const getPokemons = async (_req, res) => {
    try {
        const resp = await callApi()
        res.send(resp)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = { getPokemons }