package coursePlataform.union.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_curso")
public class Curso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cd_id", nullable = false)
	private long id;
	
	@NotNull
	@Size(min = 2, max = 80, message = "O número mínimo de caracteres para nome é 2!")
	@Column(name = "nm_nome", nullable = false, length = 80)
	private String nome;
	
	@NotNull
	@Size(min = 5, max = 150, message = "O número mínimo de caracteres para a descrição é 5!")
	@Column(name = "ds_descricao", nullable = false, length = 150)
	private String descricao;
	
	@NotNull
	@Size(min = 2, max = 80, message = "O número mínimo de caracteres para o genêro é 2!")
	@Column(name = "nm_genero", nullable = false, length = 80)
	private String genero;
	
	@NotNull
	@Column(name = "imagem", nullable = false)
	private String imagem;
	
	@NotNull
	@Size(min = 5, max = 255, message = "O número mínimo de caracteres para o genêro é 5!")
	@Column(name = "link", nullable = false, length = 255)
	private String link;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

}
