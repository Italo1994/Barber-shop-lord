import { useNavigate } from 'react-router-dom';

import { FormContainer, Title, AreaButton, TextLink } from './styles';

import { Input } from '../Input';
import { Button } from '../Button';

import $ from 'jquery';

const Form = ({hasLink, color, login, cadastro}) => {

	const navigate = useNavigate();

	const redirecionarCadastro = () => {
		navigate('/cadastro');
	}

	const onSubmit = () => {
		alert("Usuário cadastrado com sucesso!");
	}

	$(document).ready(function() {
		$(window).onload(function() {
			$("FormContainer").fadeIn("slow");
		})
	})
	
	if(login) {
		return(
			<FormContainer>
				<Input type="text" placeholder="Usuário" />
				<Input type="password" placeholder="Senha" />
				<AreaButton>
					<Button value="Entrar" width="50%" borderRadius="5px" />
				</AreaButton>
				<TextLink href="#" onClick={redirecionarCadastro}>Ainda não possui uma conta? <strong>Cadastre-se</strong></TextLink>
			</FormContainer>
		);
	}

	if(cadastro) {
		return(
		<FormContainer>
			<Input type="email" placeholder="Informe um e-mail válido" />
			<Input type="text" placeholder="Informe o seu nome completo" />
			<Input type="text" placeholder="Escolha um nome de usuário" />
			<Input type="password" placeholder="Escolha uma senha" />
			<AreaButton>
				<Button value="Cadastrar" onClick={onSubmit} width="50%" borderRadius="5px" />
			</AreaButton>
		</FormContainer>
		);
	}
}

export { Form };