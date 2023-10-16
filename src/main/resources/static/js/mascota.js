$(document)
	.ready(
		
		function() {
			
			
			$(window).on("load", function(){
				listarMascotas();
			});
			
			function listarMascotas(){
				$.ajax({
					type: "GET",
						contentType: "application/json",
						url: "http://localhost:8080/mascota/listar/"+localStorage.getItem("clientId"),
						//url: "http://localhost:8080/mascota/listar/44",
						dataType: 'json',
						success: function(result) {
							console.log(result);
							console.log(result.listaMascota[1]);
							if(result){
								(result.listaMascota).forEach(function(elem){
									console.log(elem.nombre);
									var mascota = "- Nombre: " + elem.nombre
										+ ", Especie: " + elem.especie
										+ ", Edad: " + elem.edad
										+"</br>"
										+ "--------------------------------------------------------------"
										+ "</br>" ;
									$('#getResultDiv .list-group').append(mascota)})
								
								
								
								/*for(i = 0; i < result.length; i++){
								var mascota = "-Nombre: " + result[i].nombre
										+ ", Especie: " + result[i].especie
										+ ", edad: " + result[i].edad ;
								console.log(mascota);
								$('#getResultDiv .list-group').append(mascota)}*/
				            }
				            else{
								$('#getResultDiv ul').empty();
							}
						}
				});
			}

			// SUBMIT FORM
			$("#registerMascota").submit(function(event) {
				// Prevent the form from submitting via the browser.
				event.preventDefault();
				ajaxPost();
			});

			function ajaxPost() {

				// PREPARE FORM DATA
				var formData = {
					"nombre": $("#nombre").val(),
  					"especie": $("#especie").val(),
  					"edad": $("#edad").val(),
 					"clientId": localStorage.getItem("clientId")
				}

				// DO POST
				$
					.ajax({
						type: "POST",
						contentType: "application/json",
						url: "http://localhost:8080/mascota/crear",
						data: JSON.stringify(formData),
						dataType: 'json',
						success: function(result) {
							if(result){
								listarMascotas();
							}
						},
						error: function(e){
							alert("Error");
						}
					});

			}

		}
		
		)