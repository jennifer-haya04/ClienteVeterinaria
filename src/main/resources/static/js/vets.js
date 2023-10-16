$(document)
	.ready(
		
		function() {
			
			
			$(window).on("load", function(){
				$(".card:first").hide()
				listarVets();
			});
			
			function listarVets(){
				$.ajax({
					type: "GET",
						contentType: "application/json",
						url: "http://localhost:8080/veterinario/listar/",
						//url: "http://localhost:8080/mascota/listar/44",
						dataType: 'json',
						success: function(result) {
							console.log(result);
							if(result){
								(result.listaVets).forEach(function(elem){
									console.log(elem);
									var cards = $(".card:first").clone();
									var nombre = elem.nombre + " " + elem.apellidos;
									var especialidad = elem.especialidad;
									var cmvp = elem.cmvp;
									
									$(cards).find(".card-header").html(nombre);
        							$(cards).find(".card-title").html("Especialidad: " + especialidad);
							        $(cards).find(".card-text").html("CMVP: " + cmvp);
							        $(cards).show() //show cards
							        $(cards).appendTo($(".card-group"))
								})
								
				            }
				            else{
								alert("Error");
							}
						},
						error: function(e){
							console.log(e);
						}
				});
			}


		}
		
		)