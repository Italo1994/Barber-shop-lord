import styled from 'styled-components';

export const AgendamentoContainer = styled.div`
	width: 100%;
	height: 100%;

	color: #000;

	overflow-x: hidden;

	box-sizing: border-box;
`

export const AgendamentoContent = styled.div`
	width: 100%;
	min-height: 69vh;

	padding-bottom: 50px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: space-between;

	margin-top: 15vh;

	h1 {
		text-align: center;
	}
`

export const ContainerBarbeiro = styled.div`
	width: 90%;
	margin: 0 auto;

	display: grid;

	@media (max-width: 540px) {
		min-height: 400px;
		
		padding-top: 10px;

		grid-template-columns: 1fr;
		align-items: flex-start;
		row-gap: 20px;

		box-sizing: border-box;

		div {
			
			flex: 1;
		}
	}

	@media (min-width: 960px) {
		grid-template-columns: 1fr 1fr;
		column-gap: 20px;
		row-gap: 30px;
	}
`