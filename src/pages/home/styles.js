import styled from 'styled-components';
import backgroundHome1 from '../../assets/barber-banner-desktop.jpg';
import backgroundHome2 from '../../assets/capa_mobile.png';

export const HomeContainer = styled.main`
	width: 100%;
	height: auto;
`

export const HomeContent = styled.div`

	margin-bottom: 100px;

	@media (max-width: 540px) {
		width: 100%;
		height: auto;

		margin: 0 auto;

		position: relative;
	}
`

export const ContentImage = styled.div`

	width: 100%;
	height: 525px;

	background-color: #5BBAD5;

	position: relative;

	-webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);

	box-sizing: border-box;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 540px) {
		height: 520px;

		border: 1px solid black;

		border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px;

		flex-direction: column;
		justify-content: center;

	}

	@media (min-width: 960px) {
		padding-right: 50px;
	}
`

export const BoxImage = styled.div`
	width: 69%;
	height: 100%;

	@media (max-width: 540px) {
		width: 50%;
		height: 150px;

		border-radius: 100%;

		background-image: url(${backgroundHome2});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	@media (min-width: 960px) {
		background-image: url(${backgroundHome1});
		background-size: cover;
	}
`

export const ContentButton = styled.div`
	position: absolute;

	@media (max-width: 540px) {
		bottom: 20px;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 960px) {
		right: 7%;
	}
`

export const Title = styled.h2`
	text-align: center;
	font-size: 2rem;
	font-weight: 600;
	color: #000;
	box-sizing: border-box;
`

export const ContainerApresentacao = styled.section`
	div {
		max-width: 700px;
		margin: 0 auto;
	}

	p {
		color: #000;
		text-align: justify;
	}

	@media (max-width: 540px) {
		width: 100%;
		padding: 50px;
	}
`

export const Servicos = styled.div`
@media (max-width: 540px) {
	width: 100%;
	min-height: 500px;
}
`

export const AreaServicos = styled.div`
	
	display: grid;

	@media (min-width: 960px) {
		grid-template-columns: repeat(4, 1fr);
		justify-content: space-between;
		align-items: center;
	}

	@media (max-width: 540px) {
		min-width: 320px;
		max-width: 100%;
		height: 100%;

		margin: 0 auto;
		padding: 25px;
	 
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(2, 1fr);
		row-gap: 25px;
	}
`

export const BoxServico = styled.div`

	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 25px;

	color: #000;

	@media (max-width: 540px) {
		width: 100%;
		height: 100%;

		justify-content: space-between;

		box-sizing: border-box;

		padding: 0 14px;

		span {
			text-align: center;
			font-size: .7rem;
			color: #000;
		}

		&:hover {
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
			transition: all .8s;
		}

	}

	@media (min-width: 960px) {
		justify-content: center;
	}
`

export const Depoimentos = styled.div`
	@media (max-width: 540px) {
		width: 100%;
		min-height: 500px;
		height: 100%;

		padding: 30px 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 20px;
	}
`

export const AreaDepoimentos = styled.div`
@media (max-width: 540px) {
	max-width: 320px;
	height: auto;

	padding: 5px;

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
}
`
