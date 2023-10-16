$(document)
	.ready(
		function() {

			// SUBMIT FORM
			$("#registerUser").submit(function(event) {
				// Prevent the form from submitting via the browser.
				event.preventDefault();
				ajaxPost();
			});

			function ajaxPost() {

				// PREPARE FORM DATA
				var formData = {
					"apellidos": $("#apellidos").val(),
  					"celular": $("#celular").val(),
  					"direccion": $("#direccion").val(),
 					"dni": $("#dni").val(),
  					"email": $("#email").val(),
  					"nombre": $("#nombre").val(),
  					"password": $("#password").val(),
  					"usuario": $("#usuario").val()
				}

				// DO POST
				$
					.ajax({
						type: "POST",
						contentType: "application/json",
						url: "http://localhost:8080/cliente/crear",
						data: JSON.stringify(formData),
						dataType: 'json',
						success: function(result) {
							if(result){
								localStorage.setItem("clientId", result.clienteId);
								location.href = "/logueado"	
							}
						},
						error: function(e){
							alert("Error");
						}
					});

			}

		})