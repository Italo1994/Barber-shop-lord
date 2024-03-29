import { } from './styles';

import { useNavigate } from 'react-router-dom';

import { CardContainer, CardImage, CardDepoimento } from './styles';

import { Image } from '../../components/Image';
import { Button } from '../../components/Button';

import bannerBarber from '../../assets/barber_banner.png';

import { AiFillStar } from 'react-icons/ai';

function Card({nome, widthImg, heightImg, srcImage, borderRadius, direction, testimony, barber}) {

	const navigate = useNavigate();

	const buscarHorarios = () => {
		navigate(`/horarios/${nome}`);
	}

	if(testimony === true) {
		return(
			<CardContainer>
				<CardImage>
					<Image src={srcImage} width={widthImg} height={heightImg} alt="Banner Lord" borderRadius={borderRadius} />
				</CardImage>
				<CardDepoimento>
					<p><strong>Nome</strong>: {nome}</p>
					<div> <span><AiFillStar size={18} color="yellow" /></span> <span><AiFillStar size={18} color="yellow" /> </span> <span> <AiFillStar size={18} color="yellow" /> </span> <span> <AiFillStar size={18} color="yellow" /> </span> <span> <AiFillStar size={18} color="yellow" /> </span> </div>
				</CardDepoimento>
			</CardContainer>
		);
	}

	if(barber === true) {
		return(
			<CardContainer>
				<CardImage>
					<Image src={srcImage} width={widthImg} height={heightImg} alt="Banner Lord" borderRadius={borderRadius} />
				</CardImage>
				<CardDepoimento>
					<p><strong>{nome}</strong></p>
					<Button value="Ver Horários" onClick={buscarHorarios} width="100%" height="8vh" backgroundColor="#FFD700" color="#000" hover="rgba(0, 0, 0, .15)" borderRadius="5px" />
				</CardDepoimento>
			</CardContainer>
		);
	}
}

export { Card };