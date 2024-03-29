import { useNavigate } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


import { 
HomeContainer, 
HomeContent, 
ContentImage,
ContentButton,
ContainerApresentacao,
Depoimentos, 
AreaDepoimentos, 
Servicos, 
AreaServicos, 
BoxServico,
BoxImage } from './styles';

// app components
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Image } from '../../components/Image';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Separator } from '../../components/Separator';
import { Title } from '../../components/Title';
import { Map } from '../../components/Map';

// images
import bannerBarber from '../../assets/capa_mobile.png';
import child1 from '../../assets/child1.png';
import child2 from '../../assets/child2.png';
import child3 from '../../assets/child3.png';
import child4 from '../../assets/child4.png';
import logo from '../../assets/logo.png';


// font awesome - icons
import { HiScissors } from 'react-icons/hi';
import { FaGamepad } from 'react-icons/fa';
import { GiPopcorn } from 'react-icons/gi';
import { MdToys } from 'react-icons/md';

function Home() {
	const navigate = useNavigate();

	const handleAgendamento = () => {
		navigate("/agendamento");
	}

	return(
		<HomeContainer>
			<Header backgroundColor="#5BBAD5" zIndex="3" />
			<ContentImage>
				<BoxImage>

				</BoxImage>
				<ContentButton>
					<Button value="AGENDAR" backgroundColor="#5BBAD5" hover="rgba(0, 0, 0, .15)" color="#FFF" borderRadius="50px" onClick={handleAgendamento} />
				</ContentButton>
			</ContentImage>

			<HomeContent>
				<ContainerApresentacao>
					<Title text="SOBRE O PEQUENO LORD" mainTitle="true" size="35px" />
					<div>
						<p>
							O pequeno lord foi criado em 2016, do zero absoluto, com
							uma forte missão: fazer com que crianças tenham um corte super tranquilo e divertido.
						
							Hoje temos o imenso orgulho de, em pouco tempo, ser o melhor salão infantil do Estado Potiguar.
						
							Mas isso só foi possibilitado apenas com um trabalho incansável de Tia Dani e Tio Victor focados
							no segmento de corte infantil. Hoje podemos afirmar que somos referência em toda região.
						
							E aí? Você quem escolhe! podemos ajudar sua Lady ou seu Lord?
						</p>
					</div>
				</ContainerApresentacao>
			</HomeContent>

			<HomeContent>
				<Servicos>
					<Title text="O QUE PROPORCIONAMOS?" mainTitle="true" size="35px" />
					<AreaServicos>
						
						<BoxServico>
							<HiScissors size={50} color="#FAA916" />
							<span>Corte Especializado e Interativo</span>
						</BoxServico>
						<BoxServico id="middle-icon">
							<GiPopcorn size={50} color="#FAA916" />
							<span>Pirulito e Pipoca</span>
						</BoxServico>
						<BoxServico>
							<FaGamepad size={50} color="#FAA916" />
							<span>Games na hora do corte</span>
						</BoxServico>
						<BoxServico>
							<MdToys size={50} color="#FAA916" />
							<span>Brinquedos e Parquinho no final</span>
						</BoxServico>
					</AreaServicos>
				</Servicos>
			</HomeContent>

			

			<HomeContent>
				<Title text="CORTES" mainTitle="true" size="35px" />
				<Carousel fade>
        			<Carousel.Item interval={5000}>
          				<Image src={child3} alt="child 1" height={300} border />
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
					<Title text="DEPOIMENTOS" mainTitle="true" size="35px" />
					<AreaDepoimentos>
						<Card nome="Anne" widthImg="100%" heightImg="100%" srcImage={child2} borderRadius="10%" testimony={true} />
						<Card nome="Brad" widthImg="100%" heightImg="100%" srcImage={child2} borderRadius="10%" testimony={true} />
						<Card nome="Anne" widthImg="100%" heightImg="100%" srcImage={child3} borderRadius="10%" testimony={true} />
						<Card nome="Brad" widthImg="100%" heightImg="100%" srcImage={child4} borderRadius="10%" testimony={true} />
					</AreaDepoimentos>
				</Depoimentos>
			</HomeContent>

			<HomeContent>
				<Title text="LOCALIZAÇÃO" />
				<Map />
			</HomeContent>

			<Footer backgroundColor="#5BBAD5" />
		</HomeContainer>
	);
}

export { Home };