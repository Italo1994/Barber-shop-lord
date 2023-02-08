import { useNavigate } from 'react-router-dom';

import { AgendamentoContainer, AgendamentoContent, ContainerBarbeiro } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';

import child1 from '../../assets/child1.png';
import child2 from '../../assets/child2.png';
import child3 from '../../assets/child3.png';
import child4 from '../../assets/child4.png';

function Agendamento() {
	const navigate = useNavigate();

	const handleHome = () => {
		navigate("/");
	}

	return(

		<AgendamentoContainer>
			<Header backgroundColor="#5BBAD5" zIndex="0" />
			
			<AgendamentoContent>
				<Title text="Barbeiros" />
				<ContainerBarbeiro>
					<Card nome="Anne" srcImage={child1} borderRadius="30%" testimony={false} />
					<Card nome="Anne" srcImage={child2} borderRadius="30%" testimony={false} />
					<Card nome="Anne" srcImage={child3} borderRadius="30%" testimony={false} />
					<Card nome="Anne" srcImage={child4} borderRadius="30%" testimony={false} />
				</ContainerBarbeiro>
			</AgendamentoContent>

			<Footer backgroundColor="#5BBAD5" />
		</AgendamentoContainer>
	);
}

export { Agendamento };