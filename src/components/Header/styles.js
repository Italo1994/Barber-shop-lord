import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 15vh;

@media (max-width: 550px) {
	height: 10vh;
	background-color: #FFF;

	display: flex;
	justify-content: center;
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

	display: none;
}
`

export const MenuItem = styled.li`
	font-size: 1.020rem;
	font-weight: 500;

	&:hover {
		transform: scale(1.2);
		transition: transform 1s;
	}
`

export const MenuLink = styled.a`
	text-decoration: none;
	color: #FFF;
`

export const Logo = styled.a`
	font-size: 2rem;
	font-weight: 700;

	color: #FFF;
	text-decoration: none;
`