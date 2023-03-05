import styled from 'styled-components';

export const CardContainer = styled.div`
	
	width: 100%;

	display: flex;
	flex-direction: ${props => props.direction ? props.direction : "column"};
	align-items: center;

	-webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
		
	border: 1px solid #B3B3B3;

	&:hover {
		-webkit-box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.75);
		-moz-box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.75);
		box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.75);
	}
	
	@media (max-width: 540px) {
		min-height: 150px;

		p {
			color: #FFF;
			font-size: 1rem;
			text-align: left;
			padding: 5px 10px;
			box-sizing: border-box;
		}
	}
	
`

export const CardImage = styled.div`
	width: 100%;
	height: 100%;
	
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 10px;
`

export const CardDepoimento = styled.div`
	
	width: 100%;

	padding: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 10px;

	background-color: #5BBAD5;
	color: #000;

	p {
		color: #FFF;
	}

	div {
		display: flex;
		column-gap: 2px;

		span {
			display: inline-block;
			flex: 1;
		}
	}

	@media (min-width: 960px) {
		width: 100%;
		min-height: 150px;
	}
`

export const CardInformacoes = styled.div`
	display: flex;
	padding: 10px;
	justify-content: flex-start;
	align-items: center;

	color: #FFF;
`