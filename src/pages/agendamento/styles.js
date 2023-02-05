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
	min-height: 400px;
	max-height: 450px;
	
	padding-top: 10px;

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	box-sizing: border-box;

	div {
		background-color: orange;
		flex: 1;
	}
`