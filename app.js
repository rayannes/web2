const express = require ('express')
const app = express()
const autorRouter = require('./autorRouter')
var handlebars = require('express-handlebars');
app.engine('handlebars',handlebars({defaultLayout:'mainLayout'}))
app.set('view engine', 'handlebars') 

app.get('/autor/detalhe/:nome',  autorRouter.detalheProduto)



  
app.listen(3000, () =>{//porta
	
})
