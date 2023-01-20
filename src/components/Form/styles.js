import styled from 'styled-components';

export const FormContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #FFF60;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 25px;

	
	z-index: 1;
`

export const Title = styled.h1`
	color: #FFF;
	font-weight: 700;
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
	width: 200px;
	margin: 0 auto;
	font-size: .95rem;
	font-weight: 400;
	color: lightyellow;
	text-align: center;
	text-decoration: none;
`