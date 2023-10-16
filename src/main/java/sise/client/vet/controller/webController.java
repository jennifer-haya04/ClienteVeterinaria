package sise.client.vet.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class webController {
	
	private int user;

	@GetMapping("/")
	public String Home() {
		return "home";
	}
	
	@GetMapping("/login")
	public String Login() {
		return "login";
	}
	
	@GetMapping("/registro")
	public String Registro() {
		return "registro";
	}
	
	@RequestMapping("/logueado")
	public String Logueado(HttpServletRequest request, Model model) {
		return "logueado";
	}
	
	@GetMapping("/misMascotas")
	public String mascotas() {
		return "mascotas";
	}
	
	@RequestMapping("/agregarMascota")
	public String agregarMascota(HttpServletRequest request, Model model) {
		
		return "logueado";
	}
	
	@GetMapping("/cita")
	public String cita() {
		return "cita";
	}
	
	@GetMapping("/nuestrosVets")
	public String vets() {
		return "vets";
	}
	
	@GetMapping("/pet")
	public String galleryPet() {
		return "pet";
	}
	
	
}
