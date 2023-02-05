import styled from 'styled-components';

export const ButtonContainer = styled.button`
	@media (max-width: 550px) {
		background-color: ${props => props.backgroundColor};
		border: 1px solid #FFF;
		border-radius: ${props => props.borderRadius};
		color: ${props => props.color};

		width: ${props => props.width};
		height: ${props => props.height};

		font-size: 1.125rem;
		font-weight: 600;

		&:hover {
			background-color: ${props => props.hover};
			cursor: pointer;
		}
	}
`