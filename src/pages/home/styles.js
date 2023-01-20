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
}
`

export const Depoimentos = styled.div`
	@media (max-width: 550px) {
		width: 100%;
		height: 100%;

		padding-top: 20px;

		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 10px;

		h2 {
			text-align: center;

		}
	}
`

export const AreaDepoimentos = styled.div`
@media (max-width: 550px) {
	max-width: 320px;
	height: auto;

	padding: 5px;

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
}
`