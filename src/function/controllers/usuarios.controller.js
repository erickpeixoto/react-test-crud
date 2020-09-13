const Usuario = require('./models/usuario.model');

module.exports = {
    index(req,res){
        const user = Usuario.find();

        res.json(user);
    },
   async create(req,res){
        const {nome_usuario,email_usuario,tipo_usuario,senha_usuario} = req.body;
        let data = {};
        let user = Usuario.findOne({email_usuario});
        if(!user){
            data = {nome_usuario,email_usuario,tipo_usuario,senha_usuario};
            user = await Usuario.create(data);
            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }

    }, details(req,res){
        const {_id} = req.params;
        const user = Usuario.find({_id});
        res.json(user);
    },
}