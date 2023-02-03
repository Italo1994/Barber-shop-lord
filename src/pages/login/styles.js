import styled from 'styled-components';

export const ContainerLogin = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	
	justify-content: center;
	align-items: center;

	background-color: #5BBAD5;

	overflow-y: hidden;
`

export const Content = styled.div`
@media (max-width: 550px) {
	background-color: rgba(0, 0, 0, 0);
	
	width: 90%;
	height: 500px;

	padding: 40px 20px;
	border-radius: 15px;

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
	row-gap: 20px;
`