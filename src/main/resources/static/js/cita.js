$(document).ready(function() {
	var mascotaId="";
	var vetId="";
	
	$(window).on("load", function(){
		llenarMascota();
		llenarVet();
	});

	function llenarMascota(){
		$.ajax({
			url: "http://localhost:8080/mascota/listar/" + localStorage.getItem("clientId"),
			type: 'GET',
			dataType: 'json',
			success: function(result) {
				$("#selectMascota").empty();
				(result.listaMascota).forEach(function(elem) {
				var id = elem.mascotaId;
				var name = elem.nombre;
				$("#selectMascota").append("<option value='" + id + "'>" + name + "</option>");
				})
			}
		});
	};
	
	function llenarVet(){
		$.ajax({
			url: "http://localhost:8080/veterinario/listar",
			type: 'GET',
			dataType: 'json',
			success: function(result) {
				$("#selectVet").empty();
				(result.listaVets).forEach(function(elem) {
				var id = elem.vetId;
				var name = elem.nombre + " " + elem.apellidos;
				$("#selectVet").append("<option value='" + id + "'>" + name + "</option>");
				})
			}
		});
	};
	
	$("#selectMascota").change(function(){
		mascotaId = $(this).val();
		console.log(mascotaId);
	});
	
	$("#selectMascota").change(function(){
		vetId = $(this).val();
		console.log(vetId);
	});

	
	$("#agendarCita").submit(function(event) {
				// Prevent the form from submitting via the browser.
				event.preventDefault();
				ajaxPost();
			});

			function ajaxPost() {

				// PREPARE FORM DATA
				var formData = {
					"cliente": localStorage.getItem("clientId"),
  					"mascota": mascotaId,
  					"veterinario": vetId,
 					"motivo": $("#motivo").val(),
  					"hora": $("#hora").val(),
  					"fecha": $("#fecha").val()
				}

				// DO POST
				$
					.ajax({
						type: "POST",
						contentType: "application/json",
						url: "http://localhost:8080/cita/crear",
						data: JSON.stringify(formData),
						dataType: 'json',
						success: function(result) {
							if(result){
								alert("La cita ha sido correctamente creada")
							}
						},
						error: function(e){
							alert("Error");
						}
					});

			}
});