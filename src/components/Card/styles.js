import styled from 'styled-components';

export const CardContainer = styled.div`
	
	@media (max-width: 550px) {
		width: 100%;
		height: auto;
		

		display: flex;
		flex-direction: column;

		
		border: 1px solid #B3B3B3;

		p {
			color: #FFF;
			text-align: left;
			padding: 5px 10px;
			box-sizing: border-box;
		}
	}
	
`

export const CardImage = styled.div`
	width: 100%;
	
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 10px;
`

export const CardDepoimento = styled.div`
	width: 100%;
	height: 100%;

	padding: 10px 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	row-gap: 10px;

	background-color: orange;
	color: #FFF;

	border-top: 1px solid #F18836;

	border-bottom-right-radius: 20px;

`