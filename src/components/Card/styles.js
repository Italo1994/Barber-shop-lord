import styled from 'styled-components';

export const CardContainer = styled.div`
	
	@media (max-width: 550px) {
		width: 100%;
		height: auto;

		display: flex;
		flex-direction: column;

		border-radius: 25px;

		p {
			color: #000;
			text-align: center;
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

	border-top-left-radius: 5px;
`

export const CardDepoimento = styled.div`
	width: 100%;
	height: 100%;

	padding: 10px 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 10px;

	background-color: #FFF;
	color: #000;

	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;

	
`