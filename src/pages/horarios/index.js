import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { HorariosContainer, HorariosContent } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';

import { TabelaHorarios } from '../../components/TabelaHorarios';

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);

const nomeParam = urlParams.get("nome");

function Horarios({nome}) {

	const calendario = {
		meses: [
			'Janeiro',
			'Fevereiro',
			'Marco',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro'
		],
		dias: [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
		]
	}

	return(
		<HorariosContainer>
			<Header />
			<HorariosContent>
				<Title text="Horários de" />
				<TabelaHorarios />
			</HorariosContent>
			<Footer />
		</HorariosContainer>
	);
}

export { Horarios };