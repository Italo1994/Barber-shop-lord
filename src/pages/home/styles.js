import styled from 'styled-components';

export const HomeContainer = styled.main`
	width: 100%;
	height: auto;
`

export const HomeContent = styled.div`
@media (max-width: 550px) {
	width: 100%;
	height: auto;

	margin: 0 auto;

	position: relative;
}
`

export const ContentImage = styled.div`
@media (max-width: 550px) {
	width: 100%;
	height: 520px;

	border: 1px solid black;

	position: relative;

	background-color: #5BBAD5;

	border-bottom-left-radius: 100px;
	border-bottom-right-radius: 100px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	-webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);

	box-sizing: border-box;
}
`

export const ContentButton = styled.div`
	position: absolute;
	bottom: 20px;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const Title = styled.h2`
	text-align: center;
	font-size: 2rem;
	font-weight: 600;
	color: #000;
	box-sizing: border-box;
`

export const ContainerApresentacao = styled.section`
@media (max-width: 550px) {
	width: 100%;
	padding: 50px;

	p {
		color: #000;
		text-align: justify;
	}
}
`

export const Servicos = styled.div`
@media (max-width: 550px) {
	width: 100%;
	min-height: 500px;
}
`

export const AreaServicos = styled.div`
@media (max-width: 550px) {
	min-width: 320px;
	max-width: 100%;
	height: 100%;

	margin: 0 auto;
	padding: 25px;

	display: grid; 
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(2, 1fr);
	align-items: center;
	row-gap: 25px;
}
`

export const BoxServico = styled.div`
@media (max-width: 550px) {
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	row-gap: 25px;

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
`

export const Depoimentos = styled.div`
	@media (max-width: 550px) {
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
@media (max-width: 550px) {
	max-width: 320px;
	height: auto;

	padding: 5px;

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
}
`
