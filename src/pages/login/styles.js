import styled from 'styled-components';

import imgLogo from '../../assets/logo.png';

export const ContainerLogin = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	justify-content: center;
	align-items: flex-start;

	background-color: #5BBAD5;

	overflow-y: hidden;

`

export const Content = styled.div`
	
	background-color: rgba(0, 0, 0, 0);

	overflow-x: hidden;

	@media (max-width: 540px) {
		
		max-width: 90%;
		height: auto;

		padding: 0 20px;

		span {
			text-align: center;
			display: inline-block;
			width: 100%;
		}
	}
`

export const AreaLogo = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;

	background: url(${imgLogo});

	@media (max-width: 540px) {
		background-size: 200% 169%;
	}

	@media (min-width: 960px) {
		background-size: 350% 169%;
	}

	background-repeat: no-repeat;
	background-position: center;

	min-height: 200px;
`