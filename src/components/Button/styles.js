import styled from 'styled-components';

export const ButtonContainer = styled.button`
	@media (max-width: 550px) {
		background-color: ${props => props.backgroundColor};
		border: 1px solid #FFF;
		border-radius: 10px;
		color: ${props => props.color};

		width: 100%;
		height: 62px;

		font-size: 1.125rem;
		font-weight: 600;

		border-radius: 50px;

		&:hover {
			background-color: ${props => props.hover};
			cursor: pointer;
		}
	}
`