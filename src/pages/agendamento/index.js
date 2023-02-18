import { useNavigate } from 'react-router-dom';

import { AgendamentoContainer, AgendamentoContent, ContainerBarbeiro } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';

import tioLucas from '../../assets/child1.png';
import tioRivan from '../../assets/child2.png';
import tiaTamise from '../../assets/child3.png';
import tiaDani from '../../assets/child4.png';

function Agendamento() {
	const navigate = useNavigate();

	const handleHome = () => {
		navigate("/");
	}

	return(

		<AgendamentoContainer>
			<Header backgroundColor="#5BBAD5" zIndex="0" />
			
			<AgendamentoContent>
				<Title text="Realize seu agendamento" align="left" />
				<ContainerBarbeiro>
					<Card nome="victor" srcImage={tioLucas} borderRadius="100%" direction="row" barber={true} />
					<Card nome="anne" srcImage={tioRivan} borderRadius="100%" barber={true} />
					<Card nome="jack" srcImage={tiaTamise} borderRadius="100%" barber={true} />
					<Card nome="lindsay" srcImage={tiaDani} borderRadius="100%" barber={true} />
				</ContainerBarbeiro>
			</AgendamentoContent>

			<Footer backgroundColor="#5BBAD5" />
		</AgendamentoContainer>
	);
}

export { Agendamento };