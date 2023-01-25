import styled from 'styled-components';

export const HomeContainer = styled.div`
	width: 100%;
	height: 90vh;
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
	height: 598px;
	position: relative;
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

export const Depoimentos = styled.div`
	@media (max-width: 550px) {
		width: 100%;
		min-height: 500px;
		height: 100%;

		padding-top: 50px;

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

export const Servicos = styled.div`
@media (max-width: 550px) {
	width: 100%;
	height: 500px;
}
`

export const AreaServicos = styled.div`
@media (max-width: 550px) {
	min-width: 320px;
	max-width: 100%;
	height: 100%;

	margin: 0 auto;

	display: grid; 
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 1fr);
	align-items: center;
	
}
`

export const BoxServico = styled.div`
@media (max-width: 550px) {
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 25px;

	box-sizing: border-box;

	padding: 0 14px;

	span {
		text-align: center;
		font-size: .9rem;
		color: #000;
	}
}
`