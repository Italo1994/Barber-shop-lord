import styled from 'styled-components';

export const FooterContainer = styled.footer`
@media (max-width: 550px) {
	width: 100%;
	height: 350px;

	background-color: ${props => props.backgroundColor};
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