package coursePlataform.union.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;


@Entity
@Table(name = "tb_usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cd_usuario")
	private long id;
	
	@NotNull
	@Size(min = 2, max = 80, message = "O valor mínimo de caracteres do nome é 2!")
	@Column(name = "nm_nome", length = 80, nullable = false)
	private String nome;
	
	@NotNull
	@Email
	@Size(min = 6, max = 120, message = "O valor mínimo de caracteres do email é 6!")
	@Column(name = "nm_email", length = 120, nullable = false)
	private String email;
	
	@NotNull
	@Size(min = 6, max = 255, message = "O valor mínimo de caracteres da senha é 6!")
	@Column(name = "nm_senha", length = 255, nullable = false)
	private String senha;

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
