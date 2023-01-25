import { useNavigate } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

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
	const navigate = useNavigate();

	const handleAgendamento = () => {
		navigate("/agendamento");
	}
	return(
		<HomeContainer>
			<Header />
			<ContentImage>
				<Image src={bannerBarber} width={360} height={598} alt="Banner Lord" gradient="true" />
				<ContentButton>
					<Button value="AGENDAR AGORA" onClick={handleAgendamento} />
				</ContentButton>
			</ContentImage>
			<HomeContent>
				<Servicos>
					<AreaServicos>
						<Title>Serviços</Title>
						<BoxServico>
							<HiScissors size={50} color="black" />
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
			<HomeContent>
				<Title>Cortes em alta</Title>
				<Carousel fade>
        			<Carousel.Item interval={1500}>
          				<Image src={child1} alt="child 1" height={300} />
          				<Carousel.Caption>
          					<h4>Corte 1</h4>
          				</Carousel.Caption>
        			</Carousel.Item>
        			<Carousel.Item interval={1500}>
          				<Image src={child2} alt="child 1" height={300} />
          				<Carousel.Caption>
          					<h4>Corte 2</h4>
          				</Carousel.Caption>
        			</Carousel.Item>
        			<Carousel.Item interval={1500}>
          				<Image src={child3} alt="child 1" height={300} />
          				<Carousel.Caption>
          					<h4>Corte 3</h4>
          				</Carousel.Caption>
        			</Carousel.Item>
        		</Carousel>
			</HomeContent>
		</HomeContainer>
	);
}

export { Home };