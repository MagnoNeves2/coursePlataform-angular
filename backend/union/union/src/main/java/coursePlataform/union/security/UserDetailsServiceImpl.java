package coursePlataform.union.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import coursePlataform.union.model.Usuario;
import coursePlataform.union.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UsuarioRepository UsuarioRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Usuario> usuario = UsuarioRepository.findByEmail(username);
		
		if(usuario.isPresent() == false) {
			throw new UsernameNotFoundException("Usuário inválido!");
		}
		
		UserDetailsImpl userDetailsImpl = new UserDetailsImpl(usuario.get());
		return userDetailsImpl;
	}

	
	
}
