import styled from 'styled-components';

export const ContainerTitle = styled.div`
	width: 100%;
	height: auto;

	padding: 40px 0;

	font-size: ${props => props.size};

	color: ${props => props.color ? props.color : "black"};

	h2 {
		font-family: 'Josefin Sans', sans-serif;
		text-align: ${props => props.align ? props.align : 'center'};
		color: ${props => props.color ? props.color : "black"};
	}

	text-align: center;
`