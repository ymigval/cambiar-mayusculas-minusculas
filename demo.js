$(document).ready(function() {
	$(document).on("click","button",function(btn){
		var texto = $("textarea");
		var formatearTexto = new FormatoTexto(texto.val());
	
		/*
		Tipo de formatos
		1 = Mayúsculas
		2 = Minúsculas
		3 = Tipo oración
		4 = Mayúscula letra inicial de cada palabra
		*/
		var tipoConversion = $(this).attr("data-tipo-formato");
		tipoConversion = new Number(tipoConversion).valueOf();


		//Formatear texto
		var formatoExito = false;
		{
			let textoProducto;

			switch(tipoConversion){
				case 1:
					//Texto en mayúsculas
					textoProducto = formatearTexto.textoMayusculas();

					if (textoProducto != null) {
						texto.val(textoProducto);
						formatoExito = true;
					}
				break
				case 2:
					//Texto en minúsculas
					textoProducto = formatearTexto.textoMinusculas();

					if (textoProducto != null) {
						texto.val(textoProducto);
						formatoExito = true;
					}
				break
				case 3:
					//Tipo oración
					textoProducto = formatearTexto.textoTipoOracion();

					if (textoProducto != null) {
						texto.val(textoProducto);
						formatoExito = true;
					}
				break
				case 4:
					//La primera letra de cara palabra en mayúscula
					textoProducto = formatearTexto.textoErCPM();

					if (textoProducto != null) {
						texto.val(textoProducto);
						formatoExito = true;
					}
				break
				default:
					alert("No se reconocer el tipo de formato");
				break
			}
		}
		


		//Deslizar hacia la ventana de texto si el formato fue exitoso
		if (formatoExito)
			$(document).scrollTop((texto.offset().top - 10));
	});
});
