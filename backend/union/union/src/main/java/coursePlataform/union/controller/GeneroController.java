package coursePlataform.union.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import coursePlataform.union.model.Genero;
import coursePlataform.union.repository.GeneroRepository;

@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GeneroController {

	@Autowired
	private GeneroRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Genero>> getAll() {
		return ResponseEntity.status(HttpStatus.OK).body(repository.findAll());
	}
	
	@GetMapping("nome/{nome}")
	public ResponseEntity<List<Genero>> getByName(@PathVariable String nome) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	@PostMapping
	public ResponseEntity<Genero> postGenero(@RequestBody Genero genero) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(genero));
	}
	
	@PutMapping
	public ResponseEntity<Genero> putGenero(@RequestBody Genero genero) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(genero));
	}
	
	@DeleteMapping("/{id}")
	public void deleteGenero(@PathVariable long id) {
		repository.deleteById(id);
	}
}
