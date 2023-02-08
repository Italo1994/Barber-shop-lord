import { useNavigate } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


import { 
HomeContainer, 
HomeContent, 
ContentImage,
ContentButton,
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
import { Footer } from '../../components/Footer';
import { Separator } from '../../components/Separator';
import { Title } from '../../components/Title';

// images
import bannerBarber from '../../assets/capa_mobile.png';
import child1 from '../../assets/child1.png';
import child2 from '../../assets/child2.png';
import child3 from '../../assets/child3.png';
import child4 from '../../assets/child4.png';
import logo from '../../assets/logo.png';

import lord1 from '../../assets/lords01.png';
import lord2 from '../../assets/lords02.png';
import lord3 from '../../assets/lords03.png';
import lord4 from '../../assets/lords04.png';

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
			<Header backgroundColor="#5BBAD5" zIndex="3" />
			<ContentImage>
				<Image src={bannerBarber} width={200} height={200} alt="capa 01" borderRadius="100px" />
				<ContentButton>
					<Button value="AGENDAR" width="69%" height="62px" backgroundColor="#5BBAD5" hover="#5BBAD569" color="#FFF" borderRadius="50px" onClick={handleAgendamento} />
				</ContentButton>
			</ContentImage>
			<HomeContent>
				<Servicos>
					<AreaServicos>
						<Title text="Serviços" mainTitle="true" size="35px" />
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

			<Separator />

			<HomeContent>
				<Title text="Cortes" mainTitle="true" size="35px" />
				<Carousel fade>
        			<Carousel.Item interval={5000}>
          				<Image src={child1} alt="child 1" height={300} border />
          				<Carousel.Caption>
          					<h4>Corte 1</h4>
          				</Carousel.Caption>
        			</Carousel.Item>
        			<Carousel.Item interval={5000}>
          				<Image src={child2} alt="child 1" height={300} />
          				<Carousel.Caption>
          					<h4>Corte 2</h4>
          				</Carousel.Caption>
        			</Carousel.Item>
        			<Carousel.Item interval={5000}>
          				<Image src={child3} alt="child 1" height={300} />
          				<Carousel.Caption>
          					<h4>Corte 3</h4>
          				</Carousel.Caption>
        			</Carousel.Item>
        		</Carousel>
			</HomeContent>


			<HomeContent>
				<Depoimentos>
					<Title text="Depoimentos" mainTitle="true" size="35px" />
					<AreaDepoimentos>
						<Card nome="Anne" srcImage={child1} borderRadius="30%" testimony={true} />
						<Card nome="Brad" srcImage={child2} borderRadius="30%" testimony={true} />
						<Card nome="Anne" srcImage={child3} borderRadius="30%" testimony={true} />
						<Card nome="Brad" srcImage={child4} borderRadius="30%" testimony={true} />
					</AreaDepoimentos>
				</Depoimentos>
			</HomeContent>

			<Footer backgroundColor="#5BBAD5" />
		</HomeContainer>
	);
}

export { Home };