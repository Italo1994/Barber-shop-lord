import { HomeContainer, HomeContent, Depoimentos, AreaDepoimentos } from './styles';

import { Header } from '../../components/Header';
import { Video } from '../../components/Video';
import { Card } from '../../components/Card';
import { Image } from '../../components/Image';

import bannerBarber from '../../assets/barber-banner-desktop.jpg';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';

function Home() {
	return(
		<HomeContainer>
			<Header />
			<Image src={bannerBarber} width={360} height={468} alt="Banner Lord" />
			<HomeContent>
				Olá
			</HomeContent>
			<HomeContent>
				<Depoimentos>
					<h2>Depoimentos</h2>
					<AreaDepoimentos>
						<Card nome="Anne" srcImage={person1} />
						<Card nome="Brad" srcImage={person2} />
						<Card nome="Anne" srcImage={person1} />
						<Card nome="Brad" srcImage={person2} />
					</AreaDepoimentos>
				</Depoimentos>
			</HomeContent>
		</HomeContainer>
	);
}

export { Home };