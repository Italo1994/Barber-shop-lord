import { useSearchParams } from 'react-router-dom';

import { HorariosContainer, HorariosContent } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);

const nomeParam = urlParams.get("nome");

function Horarios({nome}) {

	return(
		<HorariosContainer>
			<Header />

		</HorariosContainer>
	);
}

export { Horarios };