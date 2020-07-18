class FormatoTexto
{
	constructor(valor)
	{
		this.setTexto(valor);
	}

	texto()
	{
		return this.valor;
	}
	setTexto(valor = null)
	{
		this.valor = valor;
	}
	

	textoMayusculas()
	{
		//Validar entrada
		{
			if (this.texto() == undefined || this.texto().length == 0) {
				return null;
			}
		}


		this.formatearTexto();
		
		return this.texto().toUpperCase();
	}



	textoMinusculas()
	{
		//Validar entrada
		{
			if (this.texto() == undefined || this.texto().length == 0) {
				return null;
			}
		}


		//Por defecto el texto es formateado en minúsculas
		this.formatearTexto();



		return this.texto();
	}



	textoTipoOracion()
	{
		//Validar entrada
		{
			if (this.texto() == undefined || this.texto().length == 0) {
				return null;
			}
		}


		this.formatearTexto();


		//Analizar texto
		var textoProducto;

		{
			/*
			En el texto (párrafo) la primera letra de 
			la primera palabra de cada oración es en mayúscula. Un párrafo está compuesto por un conjunto de oraciones; cada oración termina con un punto.
			*/

			let listaOraciones;
			listaOraciones = this.texto().split(".");

			listaOraciones = listaOraciones.map(function(oracion){
				let letrasOracion = oracion.split("");

				if (letrasOracion[0] != undefined) {
					for (var s = 0; s < letrasOracion.length; s++) {
						if ((/[a-zA-Z0-9]/.test(letrasOracion[s]))) {
							letrasOracion[s] = letrasOracion[s].toUpperCase();
							break;
						}
					}
					oracion = letrasOracion.join("");
				}

				return oracion;
			});

			textoProducto = listaOraciones;
		}


		return textoProducto.join(".");
	}



	textoErCPM()
	{
		/*
		Significado de: ErCPM
		Er = Primer
		C = Caracteres
		P = Palabra
		M = Mayúscula
		*/


		//Validar entrada
		{
			if (this.texto() == undefined || this.texto().length == 0) {
				return null;
			}
		}


		this.formatearTexto();


		//Analizar texto
		var textoProducto;

		{
			/*
			Poner en mayúscula la primera letra de cada palabra
			*/

			let listaPalabras;
			listaPalabras = this.texto().split(" ");

			listaPalabras = listaPalabras.map(function(palabra){
				let letrasPalabra = palabra.split("");

				if (letrasPalabra[0] != undefined) {
					for (var s = 0; s < letrasPalabra.length; s++) {
						if ((/[a-zA-Z0-9]/.test(letrasPalabra[s]))) {
							letrasPalabra[s] = letrasPalabra[s].toUpperCase();
							break;
						}
					}
					palabra = letrasPalabra.join("");
				}

				return palabra;
			});

			textoProducto = listaPalabras;
		}


		return textoProducto.join(" ");
	}



	formatearTexto(){
		//Cambiar todas las palabras a minúsculas
		this.valor = this.valor.toLowerCase();


		//Si hay más de un espacio entre dos palabras reducirlo a solo un espacio
		let condicion = /[ ]{2,}/;
		this.valor = this.valor.replace(condicion, " ");
	}
}
