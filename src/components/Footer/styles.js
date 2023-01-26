import styled from 'styled-components';

export const FooterContainer = styled.footer`
@media (max-width: 550px) {
	width: 100%;
	height: 450px;

	background-color: #1C1C1C;
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