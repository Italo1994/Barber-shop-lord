import { CarouselContainer, CarouselContent } from './styles';

import { Image } from '../Image';

import child1 from '../../assets/child1.png';
import child2 from '../../assets/child2.png';

function Carousel() {
	return(
		<CarouselContainer>
			<CarouselContent>
				<Image src={child2} width={398} height={300} alt="test child1" />
				<Image src={child2} width={398} height={300} alt="test child1" />
				<Image src={child2} width={398} height={300} alt="test child1" />
			</CarouselContent>
		</CarouselContainer>
	);
}

export { Carousel };