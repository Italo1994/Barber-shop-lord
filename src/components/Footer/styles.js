import styled from 'styled-components';

export const FooterContainer = styled.footer`
@media (max-width: 540px) {
	width: 100%;
	min-height: 350px;

	background-color: ${props => props.backgroundColor ? props.backgroundColor : "#5BBAD5"};
	display: grid;
	justify-content: center;

	box-sizing: border-box;

	padding: 20px 0;

	p {
		padding-top: 10px;
		font-size: 1rem;
		color: #FFF;

		span {
			font-weight: 700;
			font-style: italic;
		}
	}
}
`

export const FooterContent = styled.div`
@media (max-width: 540px) {
	width: 100%;
	height: 100%;

	background-color: transparent;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 30px;
}
`

export const AreaSocial = styled.div`
	width: 100%;
	padding: 10px;

	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 15px;

	a {
		text-decoration: none;
		color: #FFF;
	}

`