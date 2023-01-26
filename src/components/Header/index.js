import $ from 'jquery';

import { HeaderContainer, HeaderContent, MenuNavegacao, MenuItem, MenuLink, Logo, ButtonMobile } from './styles';

import { Image } from '../Image';
import buttonMobile from '../../assets/icon-hamburger.svg';

function Header() {

	$(document).ready( function(event) {
		$("#btn-mobile").click( () => {
			$("#menu").slideToggle(1000);
		})
	})

	return(
		<HeaderContainer>
			<HeaderContent>
				<MenuNavegacao>
					<Logo href="#">Pequeno Lord</Logo>
					<MenuItem><MenuLink href="#">Início</MenuLink></MenuItem>
					<MenuItem><MenuLink href="#">Cortes</MenuLink></MenuItem>
					<MenuItem><MenuLink href="#">Agendamento</MenuLink></MenuItem>
					<MenuItem><MenuLink href="#">Contato</MenuLink></MenuItem>
					<ButtonMobile href="#" id="btn-mobile"> <Image src={buttonMobile} width={100} height={20} alt="" /> </ButtonMobile>
				</MenuNavegacao>
			</HeaderContent>
		</HeaderContainer>
	);
}

export { Header };