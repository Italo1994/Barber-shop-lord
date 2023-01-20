import styled from 'styled-components';

export const ButtonContainer = styled.button`
	@media (max-width: 550px) {
		background-color: #272988;
		border: 1px solid #FFF;
		border-radius: 10px;
		color: #FFF;

		width: 90%;
		height: 62px;

		font-size: 1.125rem;
		font-weight: 600;

		border-radius: 50px;

		&:hover {
			background-color: #27299060;
			cursor: pointer;
		}
	}
`