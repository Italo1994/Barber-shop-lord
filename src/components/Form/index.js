import { FormContainer, Title, AreaButton, TextLink } from './styles';

import { Input } from '../Input';
import { Button } from '../Button';

import $ from 'jquery';

const Form = ({hasLink}) => {
	$(document).ready(function() {
		$(window).onload(function() {
			$("FormContainer").fadeIn("slow");
		})
	})
	
	return(
		<FormContainer>
			<Title>Login</Title>
			<Input type="text" placeholder="Usuário" />
			<Input type="password" placeholder="Senha" />
			<AreaButton>
				<Button value="Entrar" />
			</AreaButton>
			<TextLink href="#">Não é admin? Clique aqui e siga para a página inicial</TextLink>
		</FormContainer>
	);
}

export { Form };