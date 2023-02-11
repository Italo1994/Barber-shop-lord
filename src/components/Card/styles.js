import styled from 'styled-components';

export const CardContainer = styled.div`
	
	@media (max-width: 550px) {
		width: 100%;
		min-height: 200px;
		

		display: flex;
		flex-direction: column;

		
		border: 1px solid #B3B3B3;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;

		p {
			color: #FFF;
			font-size: 1rem;
			text-align: left;
			padding: 5px 10px;
			box-sizing: border-box;
		}
	}
	
`

export const CardImage = styled.div`
	width: 100%;
	height: auto;
	
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 10px;
`

export const CardDepoimento = styled.div`
	width: 100%;
	height: auto;

	padding: 10px 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 10px;

	background-color: #5BBAD5;
	color: #000;

	border-top: 1px solid #F18836;

	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
`

export const CardInformacoes = styled.div`
	display: flex;
	padding: 10px;
	justify-content: flex-start;
	align-items: center;

	color: #FFF;
`