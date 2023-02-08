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
		border-radius: ${ (props) => props.borderRadius};
	}
}
`