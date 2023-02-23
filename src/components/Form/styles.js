import styled from 'styled-components';

export const FormContainer = styled.form`
	width: 100%;
	height: 100%;
	background-color: #FFF60;
	
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	row-gap: 25px;

	color: ${props => props.color ? props.color : "#FFF" };

	z-index: 1;

	label {
		color: #000;
		font-weight: 700;
		padding-left: 10px;
	}
`

export const Title = styled.h1`
	color: #FFF;
	text-align: center;
	font-weight: 700;
	width: 100%;
`

export const AreaButton = styled.div`
	width: 100%;
	height: 68px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const TextLink = styled.a`
	display: inline-block;
	width: 100%;

	margin: 0 auto;

	font-size: .95rem;
	font-weight: 400;
	
	color: lightyellow;
	text-align: center;
	text-decoration: none;

	span {
		color: yellow;
		font-weight: 700;
	}

	span#esqueceuSenha {
		text-decoration: underline;
		color: #FFF;
	}
`