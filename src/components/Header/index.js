import $ from 'jquery';

import { HeaderContainer, HeaderContent, MenuNavegacao, MenuNavegacaoMobile, ContainerButtonAlter, MenuItem, MenuLink, Logo, ButtonMobile } from './styles';

import { Image } from '../Image';
import { Button } from '../Button';
import buttonMobile from '../../assets/icon-hamburger.svg';

function Header({ backgroundColor, color, zIndex}) {

	$(document).ready( function(event) {
		$("#btn-mobile").click( () => {
			$("#menu").slideToggle(1000);
		})
	})

	return(
		<HeaderContainer backgroundColor={backgroundColor} zIndex={zIndex}>
			<HeaderContent>	
				<MenuNavegacao id="menuPrincipal">
					<Logo href="#">Pequeno Lord</Logo>
					<ContainerButtonAlter>
						<Button value="boy" width="40px" height="27px" backgroundColor="white" borderRadius="5px" />
						<Button value="girl" width="40px" height="27px" backgroundColor="pink" borderRadius="5px" />
					</ContainerButtonAlter>

					<MenuItem><MenuLink href="#">Início</MenuLink></MenuItem>
					<MenuItem><MenuLink href="#">Cortes</MenuLink></MenuItem>
					<MenuItem><MenuLink href="#">Agendamento</MenuLink></MenuItem>
					<MenuItem><MenuLink href="#">Contato</MenuLink></MenuItem>

					<ButtonMobile href="#" id="btn-mobile"> <Image src={buttonMobile} width={100} height={20} alt="" /> </ButtonMobile>
				</MenuNavegacao>
				<MenuNavegacaoMobile id="menuPrincipal">
					<Logo href="#">Pequeno Lord</Logo>
					
					<ButtonMobile href="#" id="btn-mobile"> <Image src={buttonMobile} width={100} height={20} alt="" /> </ButtonMobile>
				</MenuNavegacaoMobile>
			</HeaderContent>
		</HeaderContainer>
	);
}

export { Header };