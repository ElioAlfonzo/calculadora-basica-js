'use strict'



/*************************************************************************************
			OBJETOS CON LAS PROPIEDADES DE LA CALCULADORA
**************************************************************************************/
var p = {

	teclas: document.querySelectorAll("#calculadora ul li"),
	accion: null, //variable vacia puede ser como doble "" o con null
	digito: null,
	operaciones: document.querySelector("#operaciones"),
	cantidadSignos: null

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
		p.digito = tecla.target.innerHTML; //me permite capturar, agregar o reemplazar el contenido html

		m.calculadora(p.accion, p.digito);

	},

	calculadora: function (accion, digito) {

		switch (accion) {
			case "numero":
				p.cantidadSignos = 0;
				if (p.operaciones.innerHTML == 0) { //si la pantalla es igual a 0
					p.operaciones.innerHTML = digito;	//desaparezca el 0 y agrege lo que he tecleado
				} else {
					p.operaciones.innerHTML += digito; //concatene lo que he tecleado
				}

				break;

			case "signo":
				p.cantidadSignos++;
				if (p.cantidadSignos == 1) {

					if (p.operaciones.innerHTML == 0) { //si empieza por 0, si en en l campooperacionesse encuentra un 0
						p.operaciones.innerHTML = 0; //Me sig agregando 0
					} else {
						p.operaciones.innerHTML += digito; //agregue e digio o numero deseado
					}


				}

				break;

			case "igual":
				console.log("Es la igualdad");
				break;


			case "decimal":
				console.log("Es un decimal");
				break;


			case "borar":
				console.log("Es Borrar");
				break;
		}
	},

	borrarCalculadora : function(){
		p.operaciones.innerHTML = 0;
	}
}

m.inicio();


