import styled from 'styled-components';

export const InputContainer = styled.div`
	border-bottom: 1px solid #FFF;
	border-radius: 20px;
	outline: 0;

	height: 60px;
	width: 100%;

	input {
		background-color: transparent;
		border: 0;

		width: 100%;
		height: 60px;
		padding: 0 20px;

		color: #FFF;
		font-size: 1rem;
		outline: none;
	}

	input::placeholder {
		color: #FFF;
	}

	&:hover {
		border: 1px solid #FFF;
	}

`

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 60px;

	padding: 10px 0;

	h1 {
		width: 100%;
		color: #FFF;

		font-family: 'Open Sans', sans-serif;
		font-size: 2rem; // 1.75rem = 28px
		font-weight: 700;
		text-align: center;
		
	}
`