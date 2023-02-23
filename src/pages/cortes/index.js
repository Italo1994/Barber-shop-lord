import { ContainerCortes } from './styles';
import Carousel from 'react-bootstrap/Carousel';

import { Image } from '../../components/Image';
import { Title } from '../../components/Title';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Separator } from '../../components/Separator';

import child2 from '../../assets/child2.png';
import child3 from '../../assets/child3.png';

import lord1 from '../../assets/children/lords01.png';
import lord2 from '../../assets/children/lords02.png';
import lady1 from '../../assets/children/lady01.png';
import lady2 from '../../assets/children/lady02.png';

function Cortes() {
	return(
		<ContainerCortes>
			<Header zIndex="3" />

			<Title text="CORTES" />

			<h3>Lords</h3>
			<Carousel fade>
        		<Carousel.Item interval={5000}>
          			<Image src={lord1} alt="child 1" width="100%" height="100%" />
        		</Carousel.Item>
        		<Carousel.Item interval={5000}>
          			<Image src={lord2} alt="child 1" width="100%" height="100%" />
        		</Carousel.Item>
        	</Carousel>

        	<h3>Ladys</h3>
			<Carousel fade>
        		<Carousel.Item interval={5000}>
          			<Image src={lady1} alt="child 1" width="100%" height="100%" />
        		</Carousel.Item>
        		<Carousel.Item interval={5000}>
          			<Image src={lady2} alt="child 1" width="100%" height="100%" />
        		</Carousel.Item>
        	</Carousel>

        	<Separator />
        	
        	<Footer />
		</ContainerCortes>
	);
}

export { Cortes };