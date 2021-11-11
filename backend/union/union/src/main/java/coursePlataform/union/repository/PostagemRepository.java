package coursePlataform.union.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import coursePlataform.union.model.Postagem;

@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long> {
	public List<Postagem> findAllByTextoContainingIgnoreCase(String texto);
}
