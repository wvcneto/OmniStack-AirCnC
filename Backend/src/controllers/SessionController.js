// Index, Show, Store, Update, Destroy

const User = require('../models/User');

module.exports = {
    async store(req, res){

        const email = req.body.email; // { email } = req.body;

        let user = await User.findOne({ email }); // { email: email}

        if(!user){
            user = await User.create({ email });
        }        

        return res.json(user);
    }
};