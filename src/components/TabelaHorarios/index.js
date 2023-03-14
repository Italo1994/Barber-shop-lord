import { useState } from 'react';

import { ContainerTabelaHorarios, TabelaContent, ContainerSelect, ContainerSolicitacao, Select, Turnos } from './styles';

import { Button } from '../Button';

function TabelaHorarios( {nome} ) {

	const [mes, setMes] = useState("");
	const [dia, setDia] = useState(1);
	const [hora, setHora] = useState("");

	const handleMes = (e) => {
		setMes(e.target.value);
	}

	const handleDia = (e) => {
		setDia(e.target.value);
	}

	const handleHora = (e) => {
		setHora(e.target.value);
	}

	const showData = () => {
		console.log(mes);
		console.log(dia);
		console.log(hora);
	}
	
	const meses = [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro'
	];

	const dias = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
	];


	return (
		<ContainerTabelaHorarios>

			<ContainerSelect>
				<label>Escolha o mês</label>
				<Select onChange={ handleMes }>
					{
						meses.map( (mes, index) => (
							<option key={index} value={mes} >{mes}</option>
						))
					}
				</Select>

				<label>Escolha o dia</label>
				<Select onChange={ handleDia }>
					{
						dias.map( (dia, index) => (
							<option key={index} value={dia} >{dia}</option>
						))
					}
				</Select>
			</ContainerSelect>

			<Turnos>
				<h3>Manhã</h3>
				<h3>Tarde</h3>
			</Turnos>
			<TabelaContent>

				<Button value="09:00" onClick={handleHora} width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .7)" />
				<Button value="12:00" onClick={handleHora} width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				<Button value="15:00" onClick={handleHora} width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />

				<Button value="09:30" onClick={handleHora} width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				<Button value="12:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				<Button value="15:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />

				<Button value="10:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				<Button value="13:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				<Button value="16:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />

				<Button value="10:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				<Button value="13:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				<Button value="16:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />

				<Button value="11:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				<Button value="14:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				<Button value="17:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />

				<Button value="11:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				<Button value="14:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#0F0" hover="rgba(0,255,0, .9)" />
				
			</TabelaContent>

			<ContainerSolicitacao>
				<Button value="REALIZAR AGENDAMENTO" onClick={showData} width="269px" height="69px" borderRadius="10px" backgroundColor="#FFD700" hover="rgba(255, 215, 0, .9)" />
			</ContainerSolicitacao>
		</ContainerTabelaHorarios>
	);
}

export { TabelaHorarios };