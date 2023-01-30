import { FooterContainer, FooterContent } from './styles';
import { MenuLink, Logo } from '../Header/styles';

function Footer({ backgroundColor, color }) {
	return(
		<FooterContainer backgroundColor={backgroundColor} >
			<FooterContent>
				<Logo href="#">Pequeno Lord</Logo>
				<MenuLink href="#">Início</MenuLink>
				<MenuLink href="#">Cortes</MenuLink>
				<MenuLink href="#">Agendamento</MenuLink>
				<MenuLink href="#">Contato</MenuLink>
				
			</FooterContent>
		</FooterContainer>
	);
}

export { Footer };