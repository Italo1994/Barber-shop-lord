import styled from 'styled-components';

export const AgendamentoContainer = styled.div`
	width: 100%;
	height: 100%;

	color: #000;

	overflow-x: hidden;
`

export const AgendamentoContent = styled.div`
	width: 100%;
	height: 100vh;

	margin-top: 15vh;

	h1 {
		text-align: center;
	}
`

export const TabelaAgendamento = styled.table`
	width: 100%;
	margin: 0 auto;
	border: 0;

	padding: 0;

	box-sizing: border-box;
`

export const HeaderTabela = styled.th`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 2px;
	font-size: .8rem;
`

export const RowTabela = styled.tr`
	display: flex;
	box-sizing: border-box;

	&:nth-child(1n) {
		background-color: #1C1C1C;
		color: #FFF;
	}
`

export const ColumnTabela = styled.td`
	text-align: center;
	flex: 1;

	font-size: .5rem;

	box-sizing: border-box;

	padding: 20px 0;

`