const axios = require('axios')

const callApi = async () => {
    const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/500")   

    const foto = resp.data.sprites.front_default
    const tipo = resp.data.types
    const peso = resp.data.weight
    const listaHabilidades = resp.data.abilities

    return { foto, tipo, peso, listaHabilidades}
}

module.exports = { callApi }