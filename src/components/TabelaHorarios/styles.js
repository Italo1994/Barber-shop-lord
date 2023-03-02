import styled from 'styled-components';

export const ContainerTabelaHorarios = styled.div`
	width: 100%;
	min-height: 400px;
`

export const ContainerSelect = styled.div`
	width: 100%;

	padding: 0 20px;
	margin-bottom: 69px;

	display: flex;
	flex-direction: column;
	row-gap: 10px;
`

export const ContainerSolicitacao = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	
	padding: 10px 20px;
	margin-top: 25px;
`

export const Select = styled.select`
	width: 100%;
	height: 7vh;

	border: 0;
	outline: none;

	padding: 5px;
`

export const Turnos = styled.div`
	width: 100%;

	padding: 0 20px;

	display: grid;
	grid-template-columns: 2fr 4fr;

	h3 {
		text-align: center;
	}

	margin-bottom: 25px;
`

export const TabelaContent = styled.div`
	width: 100%;

	padding: 0 20px;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 15px;
`