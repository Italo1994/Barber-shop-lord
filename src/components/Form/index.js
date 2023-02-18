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
					<Button value="ENTRAR" width="50%" height="40px" borderRadius="5px" />
				</AreaButton>
				<TextLink href="#"><span id="esqueceuSenha">Esqueceu a senha?</span></TextLink>
				<TextLink href="#" onClick={redirecionarCadastro}>Ainda não possui uma conta? <span>Cadastre-se</span></TextLink>
			</FormContainer>
		);
	}

	if(cadastro) {
		return(
		<FormContainer>
			
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
				<Button value="CADASTRAR" onClick={onSubmit} width="50%" height="40px" borderRadius="10px" />
			</AreaButton>
		</FormContainer>
		);
	}
}

export { Form };