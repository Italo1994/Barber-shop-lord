import styled from 'styled-components';

export const ContainerCadastro = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: #5BBAD5;

	overflow-y: hidden;

	color: #FFF;
`

export const Content = styled.div`
	
	margin: 11vh auto;
	padding: 50px 20px 0 20px;
	min-height: 100vh;
	width: 500px;

	span {
		text-align: center;
		display: inline-block;
		width: 100%;
	}

	h2 {
		text-align: center;
		color: #FFF;
		margin-bottom: 69px;
	}

	@media (max-width: 540px) {
		background-color: rgba(0, 0, 0, 0);
		
		width: 90%;

		padding: 40px 20px;
	}
`