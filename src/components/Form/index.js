import { useNavigate } from 'react-router-dom';

import { FormContainer, Title, AreaButton, TextLink } from './styles';

import { Input } from '../Input';
import { Button } from '../Button';

import $ from 'jquery';

const Form = ({hasLink, color, login, cadastro}) => {

	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		const dadosUsuario = {
			nome: e.target.elements.nome.value,
			sobrenome: e.target.elements.sobrenome.value,
			email: e.target.elements.email.value,
			telefone: e.target.elements.telefone.value,
			usuario: e.target.elements.usuario.value,
			senha: e.target.elements.senha.value
		}

		console.log(dadosUsuario);

		alert("Usuário cadastrado com sucesso!");

		navigate('/login');
	}

	const redirecionarCadastro = () => {
		navigate('/cadastro');
	}

	$(document).ready(function() {
		$(window).onload(function() {
			$("FormContainer").fadeIn("slow");
		})
	})
	
	if(login) {
		return(
			<FormContainer>
				<Title>Faça login</Title>
				<Input type="text" placeholder="Usuário" />
				<Input type="password" placeholder="Senha" />
				<AreaButton>
					<Button value="ENTRAR" width="50%" height="40px" borderRadius="5px" />
				</AreaButton>
				<TextLink href="#"><span id="esqueceuSenha">Esqueceu a senha?</span></TextLink>
				<TextLink href="#" onClick={redirecionarCadastro}>Ainda não possui uma conta? <span>Cadastre-se</span></TextLink>
			</FormContainer>
		);
	}

	if(cadastro) {
		return(
		<FormContainer onSubmit={onSubmit}>
			
			<Input type="text" placeholder=" Nome" name="nome" />
			<br/>
			<Input type="text" placeholder=" Sobrenome" name="sobrenome" />
			<br/>
			<Input type="email" placeholder=" E-mail" name="email" />
			<br/>
			<Input type="tel" placeholder=" Telefone" name="telefone" />
			<br/>
			<Input type="text" placeholder="Usuário" name="usuario" />
			<br/>
			<Input type="password" placeholder=" Senha" name="senha" />
			<AreaButton>
				<Button type="submit" value="CADASTRAR" width="50%" height="40px" borderRadius="10px" />
			</AreaButton>
		</FormContainer>
		);
	}
}

export { Form };