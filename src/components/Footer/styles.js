import styled from 'styled-components';

export const FooterContainer = styled.footer`
@media (max-width: 550px) {
	width: 100%;
	min-height: 350px;

	background-color: ${props => props.backgroundColor};
	display: grid;
	justify-content: center;

	box-sizing: border-box;

	p {
		padding-top: 40px;
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
@media (max-width: 550px) {
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