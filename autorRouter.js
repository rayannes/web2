
//centralizador de rotas questao um item dois

function detalheProduto(req, res) {
	//res.type('html')
	//res.send('detalhe ' + req.params.codigo)
	res.render('autorDetalhe',req.params.id)//render para view
}

module.exports = {detalheProduto}
