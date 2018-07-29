'use strict'



/*************************************************************************************
			OBJETOS CON LAS PROPIEDADES DE LA CALCULADORA
**************************************************************************************/
var p = {

	teclas: document.querySelectorAll("#calculadora ul li"),
	accion: "" //variable vacia puede ser como doble "" o con null

}

/*************************************************************************************
			OBJETOS CON LOS METODOS DE LA CALCULADORA
**************************************************************************************/
var m = {

	inicio: function () {

		for (var i = 0; i < p.teclas.length; i++) {

			p.teclas[i].addEventListener("click", m.oprimirTecla);

		}

	},

	oprimirTecla: function (tecla) {
		//target me dice cual etiqueta li presione | getatribute extraiga el atributo deseado (clase) 
		//que se nos guarde en el objeto p en la variable accion que esta vacia

		p.accion = tecla.target.getAttribute("class"); //aqui me dice si la clase es numero,signo,etc
		m.calculadora(p.accion);

	},
	
	calculadora : function(accion){
		switch(accion){
			case "numero":
			console.log("Es un numero");
			break;

			case "signo":
			console.log("Es un signo");
			break;

			case "igual" : 
			console.log("Es la igualdad");
			break;

			case "decimal":
			console.log("Es un decimal");
			break;

			case "borar":
			console.log("Es Borrar");
			break;
		}
	}

}

m.inicio();


