import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { FormContainer, Title, AreaButton, TextLink } from './styles';

import { Input } from '../Input';
import { Button } from '../Button';

import Alert from 'react-bootstrap/Alert';

const Form = ({hasLink, color, login, cadastro}) => {

	const navigate = useNavigate();

	const [clientes, setClientes] = useState();

	const [msgAlert, setMsgAlert] = useState("");
	const [msgSuccess, setMsgSuccess] = useState("");


	useEffect( () => {
		fetch("http://localhost:5000/clientes", 
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
		.then( (response) => response.json() )
		.then( (data) => {
			setClientes(data)
		})
		.catch( (err) => console.log(err))
	}, [])


	const validaCadastro = (e) => {

		const dadosUsuario = {
			nome: e.target.elements.nome.value,
			sobrenome: e.target.elements.sobrenome.value,
			email: e.target.elements.email.value,
			telefone: e.target.elements.telefone.value,
			usuario: e.target.elements.usuario.value,
			senha: e.target.elements.senha.value
		}

		if(dadosUsuario.nome === "") {
			setMsgAlert("Por favor, preencha o nome");
			return false;
		}
		else if(dadosUsuario.email === "") {
			setMsgAlert("Por favor, preencha o e-mail");
			return false;
		}
		else if(dadosUsuario.telefone === "") {
			setMsgAlert("Por favor, preencha o telefone");
			return false;
		}
		else if(dadosUsuario.usuario === "") {
			setMsgAlert("Por favor, preencha o usuário");
			return false;
		}
		else if(dadosUsuario.senha === "") {
			setMsgAlert("Por favor, preencha a senha");
			return false;
		}
		else {
			setMsgAlert("");

			console.log(dadosUsuario);

			setMsgSuccess("Usuário cadastrado com sucesso");

			return dadosUsuario;
		}
	}


	const onSubmit = (e) => {
		e.preventDefault();

		const dadosUsuario = validaCadastro(e);
		
		if(dadosUsuario) {
			fetch("http://localhost:5000/clientes", 
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(dadosUsuario),
				}
			)
			.then( (response) => response.json() )
			.then( (data) => {
				setClientes(data)
			})
			.catch( (err) => console.log(err))
		}


		setTimeout( function() {
			navigate('/login');
			setMsgSuccess("");
		}, 3500);

	}


	const validaLogin = (e) => {

	}

	const redirecionarCadastro = () => {
		navigate('/cadastro');
	}
	


	if(login) {
		return(
			<FormContainer onSubmit={validaLogin} >
				<Title>Faça login</Title>
				<Input type="text" placeholder="Usuário" />
				<Input type="password" placeholder="Senha" />
				<AreaButton>
					<Button type="submit" value="ENTRAR" width="50%" height="40px" borderRadius="5px" hover="rgba(0, 0, 0, .2)" />
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

			{msgAlert !== "" &&
				<Alert variant="warning" style={{ width: '100%' }} >
					{msgAlert}
				</Alert>
			}

			{msgSuccess !== "" &&
				<Alert variant="success" style={{ width: '100%' }} >
					{msgSuccess}
				</Alert>
			}

			<AreaButton>
				<Button type="submit" value="CADASTRAR" width="50%" height="40px" borderRadius="10px" />
			</AreaButton>
		</FormContainer>
		);
	}
}

export { Form };