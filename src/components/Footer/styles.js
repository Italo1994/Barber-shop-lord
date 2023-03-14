import styled from 'styled-components';

export const FooterContainer = styled.footer`
	
	width: 100%;
	background-color: ${props => props.backgroundColor ? props.backgroundColor : "#5BBAD5"};

	display: flex;
	justify-content: center;

	box-sizing: border-box;

	p {
		padding-top: 10px;
		font-size: 1rem;
		color: #FFF;

		span {
			font-weight: 700;
			font-style: italic;
		}
	}

	@media (max-width: 540px) {
		min-height: 300px;

		justify-content: center;

		padding: 20px 0;
	}
`

export const FooterContent = styled.div`
	
	width: 100%;
	height: 100%;

	background-color: transparent;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	

	@media (min-width: 960px) {
		padding: 20px 69px;
	}
`

export const WrapperFooter = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;


	justify-content: space-between;
	align-items: center;

	@media (max-width: 540px) {
		
		row-gap: 25px;
	}
`

export const AreaNavegacao = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	row-gap: 25px;
`

export const AreaSocial = styled.div`
	width: 100%;
	padding: 10px;
	margin-top: 25px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	a {
		text-decoration: none;
		color: #FFF;
	}

	div {
		display: flex;
		column-gap: 20px;
	}

	@media (max-width: 540px) {
		column-gap: 15px;
	}

	@media (min-width: 960px) {
		column-gap: 25px;
	}

`

export const Copyright = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`