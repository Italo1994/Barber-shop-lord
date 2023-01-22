import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 15vh;

@media (max-width: 550px) {
	height: 10vh;
	background-color: #1C1C1C;

	display: flex;
	justify-content: center;

	position: fixed;
	top: 0;
	z-index: 2;

}
`

export const HeaderContent = styled.div`
	width: 100%;
	height: 100%;

	display: flex:
	justify-content: space-between;
	align-items: center;

`

export const MenuNavegacao = styled.ul`
@media (max-width: 550px) {
	display: flex;
	justify-content: space-around;
	align-items: center;

	list-style: none;

	width: 100%;
	height: 100%;

	box-sizing: border-box;
}
`

export const MenuItem = styled.li`
@media (max-width: 550px) {
	font-size: 1.020rem;
	font-weight: 500;

	&:hover {
		transform: scale(1.2);
		transition: transform 1s;
	}

	display: none;
}
`

export const MenuLink = styled.a`
	text-decoration: none;
	color: #FFF;
`

export const Logo = styled.a`
@media (max-width: 550px) {
	font-size: 1.5rem;
	font-weight: 700;

	color: #FFF;
	text-decoration: none;
}
	font-size: 2rem;
`

export const ButtonMobile = styled.a`
@media (max-width: 550px) {
	display: inline-block;
	max-width: 100px;
	height: 25px;

	padding: 5px;
	color: #FFF;

	text-decoration: none;
}
`