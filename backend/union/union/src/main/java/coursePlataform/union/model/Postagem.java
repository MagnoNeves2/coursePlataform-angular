package coursePlataform.union.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_postagem")
public class Postagem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cd_postagem", nullable = false)
	private long id;
	
	@NotNull
	@Size(min = 5, max = 1000, message = "A quantidade mínima para Texto é de 5 caracteres")
	@Column(name = "nm_texto", nullable = false, length = 1000)
	private String texto;
	
	@NotNull
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "dt_data", nullable = false)
	private Date data = new java.sql.Date(System.currentTimeMillis());

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

}
