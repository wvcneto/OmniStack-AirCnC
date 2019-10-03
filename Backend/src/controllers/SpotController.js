const Spot = require('../models/Spot');
const User = require('../models/User');


module.exports = {
    async index(req, res){
        const { tech } = req.query; // Tipo requerido pela query

        const spots = await Spot.find({ techs:tech }); // Retorna spots onde em suas techs tenha a tech requerida

        return res.json(spots);
    },

    async store(req, res) {
        //console.log(req.body); Corpo da requisição Multipart - Todas infos dos campos/variaveis
        //console.log(req.file); Somente a requisição do tipo file

        const { filename } = req.file; // Tipo file da requisição
        const { company, techs, price } = req.body; // Demais informações do body (strings)
        const { user_id } = req.headers; // Informações do header - id do usuario enviado na requisição - Contexto

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({error: 'User does not exists'});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()), // sempara a string onde houver ',' e retira spaço em branco no inicio e no final
            price
        });

        return res.json(spot); 
    }
};