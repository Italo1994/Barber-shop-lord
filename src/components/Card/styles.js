import styled from 'styled-components';

export const CardContainer = styled.div`
	
	@media (max-width: 550px) {
		width: 100%;
		height: auto;

		display: flex;
		flex-direction: column;

		border-radius: 5px;
		border: 1px solid #FFF;
	}
	
`

export const CardImage = styled.div`
	width: 100%;
	
	display: flex;
	justify-content: center;
	align-items: center;

	border-bottom: 1px solid #FFF;
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

	p {
		text-align: center;
		padding: 0 10px;
	}
`