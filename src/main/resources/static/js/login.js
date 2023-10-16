$(document)
	.ready(
		function() {

			// SUBMIT FORM
			$("#login").submit(function(event) {
				// Prevent the form from submitting via the browser.
				event.preventDefault();
				ajaxPost();
			});

			function ajaxPost() {

				// PREPARE FORM DATA
				var formData = {
  					"password": $("#password").val(),
  					"usuario": $("#usuario").val()
				}

				// DO POST
				$
					.ajax({
						type: "POST",
						contentType: "application/json",
						url: "http://localhost:8080/cliente/login",
						data: JSON.stringify(formData),
						dataType: 'json',
						success: function(result) {
							if(result){
								localStorage.setItem("clientId", result.clienteId);
								location.href = "/logueado"	
							}
						},
						error: function(e){
							console.log(e);
							alert("Error");
						}
					});

			}

		})