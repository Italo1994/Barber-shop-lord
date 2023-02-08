import { } from './styles';

import { CardContainer, CardImage, CardDepoimento } from './styles';

import { Image } from '../../components/Image';
import { Button } from '../../components/Button';

import bannerBarber from '../../assets/barber_banner.png';

function Card({nome, srcImage, borderRadius, testimony}) {

	if(testimony === true) {
		return(
			<CardContainer>
				<CardImage>
					<Image src={srcImage} width={100} height={100} alt="Banner Lord" borderRadius={borderRadius} />
				</CardImage>
				<CardDepoimento>
					<p><strong>Nome</strong>: {nome}</p>
					<p>Lorem ipsum solor sit amet aun von prost auf wiedersehen</p>
				</CardDepoimento>
			</CardContainer>
		);
	}

		return(
			<CardContainer>
				<CardImage>
					<Image src={srcImage} width={100} height={100} alt="Banner Lord" borderRadius={borderRadius} />
				</CardImage>
				<CardDepoimento>
					<p><strong>Nome</strong>: {nome}</p>
					<Button value="Ver horários" width="90%" backgroundColor="#FFF" color="#000" borderRadius="5px" />
				</CardDepoimento>
			</CardContainer>
		);
}

export { Card };