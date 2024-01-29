

function teste(cb) {
	cb();
}

teste(function () {
	console.log("calback chamada")
})


function teste2(n1) {

	return function soma(n2) {
		return n1 + n2
	}
}

const func = teste2(10)
const result = func(20)
console.log(result)


function usuario(nome, cb) {
	cb(nome)
}

function endereco(usuario,cb) {
	cb(usuario)
}

usuario("edson",(nome) => {
	endereco(nome,() => {
		console.log("nome " + nome)
	});
})
