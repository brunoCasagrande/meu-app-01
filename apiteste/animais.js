module.exports = (app) =>{
    const ObjectId = require('mongodb').ObjectId;
    //Colocar aqui as rotas para requisições de animais

    //Rota para listar animais
    app.get('/animais', (req, res) => {
        //res.send('retornar animais');
        db.collection('animais').find().toArray((err, results)=>{
        if (err) throw err;
        res.json(results);
        });
       });
       

    //Rota para inclusão de animal

    app.post('/animais',(req,res,next)=>{
        db.collection('animais').insertOne(req.body,(err, result)=>{
            if(err) throw err;
            res.json({success: "Incluir com sucesso."});
        })
    });
}