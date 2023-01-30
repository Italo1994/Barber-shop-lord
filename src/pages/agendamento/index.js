import { useNavigate } from 'react-router-dom';

import { AgendamentoContainer, AgendamentoContent, TabelaAgendamento, HeaderTabela, RowTabela, ColumnTabela } from './styles';

import { Header } from '../../components/Header';

function Agendamento() {
	const navigate = useNavigate();

	const handleHome = () => {
		navigate("/home");
	}

	return(

		<AgendamentoContainer>
			<Header backgroundColor="#5BBAD5" zIndex="0" />
			<AgendamentoContent>
				<h1>Agendamento</h1>
				<TabelaAgendamento>
					<HeaderTabela>
						<ColumnTabela>Segunda</ColumnTabela>
						<ColumnTabela>Terça</ColumnTabela>
						<ColumnTabela>Quarta</ColumnTabela>
						<ColumnTabela>Quinta</ColumnTabela>
						<ColumnTabela>Sexta</ColumnTabela>
						<ColumnTabela>Sábado</ColumnTabela>
						<ColumnTabela>Domingo</ColumnTabela>
					</HeaderTabela>
					<RowTabela>
						<ColumnTabela>Segunda</ColumnTabela>
						<ColumnTabela>Terça</ColumnTabela>
						<ColumnTabela>Quarta</ColumnTabela>
						<ColumnTabela>Quinta</ColumnTabela>
						<ColumnTabela>Sexta</ColumnTabela>
						<ColumnTabela>Sábado</ColumnTabela>
						<ColumnTabela>Domingo</ColumnTabela>
					</RowTabela>
					<RowTabela>
						<ColumnTabela>Segunda</ColumnTabela>
						<ColumnTabela>Terça</ColumnTabela>
						<ColumnTabela>Quarta</ColumnTabela>
						<ColumnTabela>Quinta</ColumnTabela>
						<ColumnTabela>Sexta</ColumnTabela>
						<ColumnTabela>Sábado</ColumnTabela>
						<ColumnTabela>Domingo</ColumnTabela>
					</RowTabela>
					<RowTabela>
						<ColumnTabela>Segunda</ColumnTabela>
						<ColumnTabela>Terça</ColumnTabela>
						<ColumnTabela>Quarta</ColumnTabela>
						<ColumnTabela>Quinta</ColumnTabela>
						<ColumnTabela>Sexta</ColumnTabela>
						<ColumnTabela>Sábado</ColumnTabela>
						<ColumnTabela>Domingo</ColumnTabela>
					</RowTabela>
					<RowTabela>
						<ColumnTabela>Segunda</ColumnTabela>
						<ColumnTabela>Terça</ColumnTabela>
						<ColumnTabela>Quarta</ColumnTabela>
						<ColumnTabela>Quinta</ColumnTabela>
						<ColumnTabela>Sexta</ColumnTabela>
						<ColumnTabela>Sábado</ColumnTabela>
						<ColumnTabela>Domingo</ColumnTabela>
					</RowTabela>
				</TabelaAgendamento>
			</AgendamentoContent>

			<button onClick={handleHome}>Voltar para a home</button>
		</AgendamentoContainer>
	);
}

export { Agendamento };