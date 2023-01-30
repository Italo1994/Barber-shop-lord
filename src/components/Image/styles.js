import styled from 'styled-components';

export const ContainerImage = styled.div`
@media (max-width: 550px) {
	width: 100%;
	height: auto;
	
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${props => props.borderRadius};

	img {
		width: 100%;
		border-radius: ${ (props) => props.borderRadius};
	}
}
`