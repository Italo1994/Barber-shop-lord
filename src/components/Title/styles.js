import styled from 'styled-components';

export const ContainerTitle = styled.div`
	width: 100%;
	height: auto;

	padding: 40px 0;

	font-size: ${props => props.size};

	h1, h2 {
		font-family: 'Pacifico', cursive;
		text-align: ${props => props.align ? props.align : 'center'};
		color: ${props => props.color ? props.color : "black"};
	}

	text-align: center;
`