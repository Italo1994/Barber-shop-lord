import { useNavigate } from 'react-router-dom';

import { AgendamentoContainer, AgendamentoContent, ContainerBarbeiro } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';

import tioLucas from '../../assets/colaboradores/1.png';
import tioRivan from '../../assets/colaboradores/2.png';
import tiaTamise from '../../assets/colaboradores/3.png';
import tiaDani from '../../assets/colaboradores/6.png';

function Agendamento() {
	const navigate = useNavigate();

	const handleHome = () => {
		navigate("/");
	}

	return(

		<AgendamentoContainer>
			<Header backgroundColor="#5BBAD5" zIndex="0" />
			
			<AgendamentoContent>
				<Title text="AGENDAMENTO" align="left" />
				<ContainerBarbeiro>
					<Card nome="Tio Lucas" widthImg="100%" heightImg="100%" srcImage={tioLucas} borderRadius="" direction="row" barber={true} />
					<Card nome="Tio Rivan" widthImg="100%" heightImg="100%" srcImage={tioRivan} borderRadius="" barber={true} />
					<Card nome="Tia Tamize" widthImg="100%" heightImg="100%" srcImage={tiaTamise} borderRadius="" barber={true} />
					<Card nome="Tia Dani" widthImg="100%" heightImg="100%" srcImage={tiaDani} borderRadius="" barber={true} />
				</ContainerBarbeiro>
			</AgendamentoContent>

			<Footer backgroundColor="#5BBAD5" />
		</AgendamentoContainer>
	);
}

export { Agendamento };