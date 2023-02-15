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
				<Title>Faça login</Title>
				<Input type="text" placeholder="Usuário" />
				<Input type="password" placeholder="Senha" />
				<AreaButton>
					<Button value="ENTRAR" width="50%" borderRadius="5px" />
				</AreaButton>
				<TextLink href="#" onClick={redirecionarCadastro}>Ainda não possui uma conta? <strong>Cadastre-se</strong></TextLink>
			</FormContainer>
		);
	}

	if(cadastro) {
		return(
		<FormContainer>
			<label for="nome">Nome:</label>
			<Input type="text" placeholder=" nome completo" name="nome" />
			<label for="email">E-mail:</label>
			<Input type="email" placeholder=" usuario@gmail.com" name="email" />
			<label for="telefone">Telefone:</label>
			<Input type="tel" placeholder=" 84999991234" name="telefone" />
			<label for="usuario">Usuário:</label>
			<Input type="text" placeholder="ex: usuario1234" name="usuario" />
			<label for="nome">Senha:</label>
			<Input type="password" placeholder=" senha" name="senha" />
			<AreaButton>
				<Button value="CADASTRAR" onClick={onSubmit} width="50%" borderRadius="10px" />
			</AreaButton>
		</FormContainer>
		);
	}
}

export { Form };