import { HeaderContainer, HeaderContent, MenuNavegacao, MenuItem, MenuLink, Logo } from './styles';

function Header() {
	return(
		<HeaderContainer>
			<HeaderContent>
				<MenuNavegacao>
					<Logo href="#">Pequeno Lord</Logo>
					<MenuItem><MenuLink href="#">Início</MenuLink></MenuItem>
					<MenuItem><MenuLink href="#">Cortes</MenuLink></MenuItem>
					<MenuItem><MenuLink href="#">Agendamento</MenuLink></MenuItem>
					<MenuItem><MenuLink href="#">Contato</MenuLink></MenuItem>
				</MenuNavegacao>
			</HeaderContent>
		</HeaderContainer>
	);
}

export { Header };