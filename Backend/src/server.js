const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://OmniStackDB:864717@omnistack-jae9j.mongodb.net/aircnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);


// GET(Add), POST(View), PUT(Edit), DELETE(Delete)

// re.query acessar query params (Filtros)
// req.params = Acessar route params (para edição ou delete)
// req.body = Acessar corpo da requisição (Criação e Edição)

/*
app.post('/users',(req, res) => { // /:id para indicar se possui id
    
    return res.json(req.body);
    //return res.json({id : req.params.id}); acessa id
    //return res.json({message : "Hello Omnistack"}); envia mensagem
    //return res.json({idade : req.query.idade}); Requisição GET com query EX: users?idade=22 filtrar
    
});
*/