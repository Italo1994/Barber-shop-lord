import { useNavigate } from 'react-router-dom';

import { AgendamentoContainer, AgendamentoContent, ContainerBarbeiro } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

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
				<h1>Barbeiros</h1>
				<ContainerBarbeiro>
					<Card nome="Anne" srcImage={child1} borderRadius="50%" testimony={false} />
					<Card nome="Anne" srcImage={child2} borderRadius="50%" testimony={false} />
					<Card nome="Anne" srcImage={child3} borderRadius="50%" testimony={false} />
					<Card nome="Anne" srcImage={child4} borderRadius="50%" testimony={false} />
				</ContainerBarbeiro>
			</AgendamentoContent>

			<button onClick={handleHome}>Voltar para a home</button>

			<Footer backgroundColor="#5BBAD5" />
		</AgendamentoContainer>
	);
}

export { Agendamento };