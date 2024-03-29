import styled from 'styled-components';

export const ContainerImage = styled.div`

	@media (max-width: 540px) {
		width: 100%;
		min-height: 50px;
		
		display: ${props => props.display};
		justify-content: center;
		align-items: center;
		border-radius: ${props => props.borderRadius};

		img {
			width: ${ (props) => props.width};
			height: ${ (props) => props.height};
			border-radius: ${ (props) => props.borderRadius};
		}
	}
`