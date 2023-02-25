import styled from 'styled-components';
import buttonMobile from '../../assets/icon-hamburger.svg';

export const HeaderContainer = styled.header`

	width: 100%;
	max-width: 100%;
	
	height: 10vh;
	background-color: ${props => props.backgroundColor ? props.backgroundColor : "#5BBAD5" };

	display: flex;
	justify-content: center;

	z-index: ${props => props.zIndex};

	-webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);

@media (max-width: 540px) {
	position: fixed;
	top: 0;
}

`

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 100%;
	height: 100%;

	display: flex:
	justify-content: space-between;
	align-items: center;

@media (max-width: 540px) {

}
`

export const MenuNavegacao = styled.ul`

	display: grid;
	grid-template-columns: 1fr 1fr 3fr;
	justify-content: space-around;
	align-items: center;

	width: 100%;
	height: 100%;

	box-sizing: border-box;

	list-style: none;

@media (max-width: 540px) {
	grid-template-columns: 2fr 1fr 1fr;
	padding: 0;
	column-gap: 25px;
}
`

export const AreaMenu = styled.div`
@media (max-width: 540px) {
	display: none;
}

	display: flex;
	justify-content: space-around;
	align-items: center;
`

export const MenuNavegacaoMobile = styled.ul`
@media (max-width: 540px) {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: #1C1C1C;

	list-style: none;

	width: 100%;
	height: 20vh;
	display: none;
}
`

export const ContainerLogo = styled.div`
@media (max-width: 540px) {
	width: 100%;

	box-sizing: border-box;

	background-image: url("../../assets/logo.png");
}
`

export const ContainerButtonAlter = styled.div`
@media (max-width: 540px) {
	column-gap: 2px;

	width: auto;

	flex: 3;
}

	display: flex;
	justify-content: center;
	column-gap: 5px;
`

export const MenuItem = styled.li`
@media (max-width: 540px) {
	font-size: 1.020rem;
	font-weight: 500;

	&:hover {
		transform: scale(1.2);
		transition: transform 1s;
	}
}

@media (max-width: 720px) {
	
}

@media (max-width: 960px) {
	
}

	&:hover {
		transform: scale(1.3);
		transition: transform 1s;
	}

	column-gap: 10px;
	color: #FFF;

`

export const MenuLink = styled.a`
	text-decoration: none;
	color: #FFF;

	&:hover {
		color: #000;
	}
`

export const Logo = styled.a`
@media (max-width: 540px) {
	font-size: 1.5rem;
	font-weight: 700;

	padding: 5px;

	
}
	
	color: #FFF;
	text-decoration: none;

	font-size: 2rem;
	font-family: 'Pacifico', cursive;

	&:visited {
		color: #FFF;
	}
`

export const ButtonMobile = styled.a`

	display: none;
	background-image: url(${buttonMobile});
	background-size: 100% 100%;
	background-repeat: no-repeat;
	
	@media (max-width: 540px) {
		display: inline-block;

		width: 47px;
		height: 27px;

		padding: 5px;
		color: #FFF;

		text-decoration: none;

	}

	@media (max-width: 720px) {
		
	}

	@media (min-width: 960px) {
		background-image: url(${buttonMobile});
	}
`