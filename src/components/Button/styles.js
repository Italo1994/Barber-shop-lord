import styled from 'styled-components';

export const ButtonContainer = styled.button`
	background-color: ${props => props.backgroundColor};
	border: 1px solid #FFF;
	border-radius: ${props => props.borderRadius};
	color: ${props => props.color};

	width: ${props => props.width ? props.width : "250px"};
	height: ${props => props.height ? props.height : "69px"};

	@media (max-width: 540px) {

		font-size: 1.125rem;
		font-weight: 600;

		&:hover {
			background-color: ${props => props.hover};
			cursor: pointer;
		}
	}
`

