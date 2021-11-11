package coursePlataform.union.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import coursePlataform.union.model.Genero;

@Repository
public interface GeneroRepository extends JpaRepository<Genero, Long> {
	public List<Genero> findAllByNomeContainingIgnoreCase(String nome);
}
