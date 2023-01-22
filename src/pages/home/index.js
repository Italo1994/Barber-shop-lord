import { HomeContainer, 
HomeContent, 
ContentImage,
ContentButton,
Title, 
Depoimentos, 
AreaDepoimentos, 
Servicos, 
AreaServicos, 
BoxServico } from './styles';

// app components
import { Header } from '../../components/Header';
// import { Video } from '../../components/Video';
import { Card } from '../../components/Card';
import { Image } from '../../components/Image';
import { Button } from '../../components/Button';

// images
import bannerBarber from '../../assets/capa_mobile.png';
import child1 from '../../assets/child1.png';
import child2 from '../../assets/child2.png';
import child3 from '../../assets/child3.png';
import child4 from '../../assets/child4.png';

// font awesome - icons
import { HiScissors } from 'react-icons/hi';
import { FaPumpSoap } from 'react-icons/fa';

function Home() {
	return(
		<HomeContainer>
			<Header />
			<ContentImage>
				<Image src={bannerBarber} width={360} height={568} alt="Banner Lord" gradient="true" />
				<ContentButton>
					<Button value="Agendar Agora" />
				</ContentButton>
			</ContentImage>
			<HomeContent>
				<Servicos>
					<AreaServicos>
						<Title>Serviços</Title>
						<BoxServico>
							<HiScissors size={50} />
							<span>Corte padrão</span>
						</BoxServico>
						<BoxServico id="middle-icon">
							<FaPumpSoap size={50} color="blue" />
							<span>Lavagem</span>
						</BoxServico>
						<BoxServico>
							<HiScissors size={50} color="#FFC145" />
							<span>Corte personalizado</span>
						</BoxServico>
					</AreaServicos>
				</Servicos>
			</HomeContent>
			<HomeContent>
				<Depoimentos>
					<Title>Depoimentos</Title>
					<AreaDepoimentos>
						<Card nome="Anne" srcImage={child1} />
						<Card nome="Brad" srcImage={child2} />
						<Card nome="Anne" srcImage={child3} />
						<Card nome="Brad" srcImage={child4} />
					</AreaDepoimentos>
				</Depoimentos>
			</HomeContent>
		</HomeContainer>
	);
}

export { Home };