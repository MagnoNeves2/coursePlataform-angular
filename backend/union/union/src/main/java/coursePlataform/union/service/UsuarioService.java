package coursePlataform.union.service;

import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import coursePlataform.union.model.Usuario;
import coursePlataform.union.model.UsuarioLogado;
import coursePlataform.union.model.UsuarioLogin;
import coursePlataform.union.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public Usuario CadastrarUsuario(Usuario usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String senhaEncoder = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaEncoder);
		return usuarioRepository.save(usuario);
	}
	
	public Optional<UsuarioLogado> Logar(UsuarioLogin usuarioLogin) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		Optional<Usuario> usuario = usuarioRepository.findByEmail(usuarioLogin.getEmail());
		
		if(usuario.isPresent() == false) {
			return Optional.empty();
		}
		
		if(encoder.matches(usuarioLogin.getSenha(), usuario.get().getSenha()) == false) {
			return Optional.empty();
		}
		
		//Criando o token
		String auth = usuarioLogin.getEmail() + ":" + usuarioLogin.getSenha();
		String encoding = Base64.getEncoder().encodeToString((auth).getBytes());
		String authHeader = "Basic " + encoding;
		
		//Criando uma instância do objeto UsuarioLogado
		UsuarioLogado usuarioLogado = new UsuarioLogado();
		usuarioLogado.setId(usuario.get().getId());
		usuarioLogado.setNome(usuario.get().getNome());
		usuarioLogado.setEmail(usuario.get().getEmail());
		usuarioLogado.setToken(authHeader);
		
		return Optional.ofNullable(usuarioLogado);
	}
	
	

}
