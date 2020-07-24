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

import coursePlataform.union.model.Curso;
import coursePlataform.union.repository.CursoRepository;

@RestController
@RequestMapping("/cursos")
@CrossOrigin("*")
public class CursoController {

	@Autowired
	private CursoRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Curso>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Curso> GetById(@PathVariable long id) {
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Curso> postCurso(@RequestBody Curso curso) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(curso));
	}
	
	@PutMapping
	public ResponseEntity<Curso> putCurso(@RequestBody Curso curso) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(curso));
	}
	
	@DeleteMapping("/{id}")
	public void deleteCurso(@PathVariable long id) {
		repository.deleteById(id);
	}
	
}
