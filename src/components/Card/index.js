import { } from './styles';

import { useNavigate } from 'react-router-dom';

import { CardContainer, CardImage, CardDepoimento } from './styles';

import { Image } from '../../components/Image';
import { Button } from '../../components/Button';

import bannerBarber from '../../assets/barber_banner.png';

function Card({nome, srcImage, borderRadius, direction, testimony, barber}) {

	const navigate = useNavigate();

	const buscarHorarios = () => {
		navigate(`/horarios/${nome}`);
	}

	if(testimony === true) {
		return(
			<CardContainer>
				<CardImage>
					<Image src={srcImage} width={100} height={100} alt="Banner Lord" borderRadius={borderRadius} />
				</CardImage>
				<CardDepoimento>
					<p><strong>Nome</strong>: {nome}</p>
					<p>Lorem ipsum solor sit amet</p>
				</CardDepoimento>
			</CardContainer>
		);
	}

	if(barber === true) {
		return(
			<CardContainer>
				<CardImage>
					<Image src={srcImage} width={120} height={120} alt="Banner Lord" borderRadius={borderRadius} />
				</CardImage>
				<CardDepoimento>
					<p><strong>Nome</strong>: {nome}</p>
					<Button value="Ver horários" onClick={buscarHorarios} width="100%" height="27px" backgroundColor="#FFD700" color="#000" borderRadius="5px" />
				</CardDepoimento>
			</CardContainer>
		);
	}
}

export { Card };