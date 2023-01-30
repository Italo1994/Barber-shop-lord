import { useNavigate } from 'react-router-dom';

import { FormContainer, Title, AreaButton, TextLink } from './styles';

import { Input } from '../Input';
import { Button } from '../Button';

import $ from 'jquery';

const Form = ({hasLink}) => {

	const navigate = useNavigate();

	const onPassHome = () => {
		navigate('/home');
	}

	$(document).ready(function() {
		$(window).onload(function() {
			$("FormContainer").fadeIn("slow");
		})
	})
	
	return(
		<FormContainer>
			<Input type="text" placeholder="Usuário" />
			<Input type="password" placeholder="Senha" />
			<AreaButton>
				<Button value="Entrar" />
			</AreaButton>
			<TextLink href="#" onClick={onPassHome}>Ainda não possui uma conta? <strong>Cadastre-se</strong></TextLink>
		</FormContainer>
	);
}

export { Form };