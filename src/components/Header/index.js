import $ from 'jquery';

import { HeaderContainer, HeaderContent, MenuNavegacao, MenuNavegacaoMobile, ContainerLogo, ContainerButtonAlter, Logo, MenuItem, MenuLink, ButtonMobile, AreaMenu } from './styles';

import { Image } from '../Image';
import { Button } from '../Button';

import logo from '../../assets/logo.png';

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
					<Logo href="/">Pequeno Lord</Logo>
					<ContainerButtonAlter>
						<Button value="boy" width="40px" height="27px" backgroundColor="white" borderRadius="5px" icon="boy" />
						<Button value="girl" width="40px" height="27px" backgroundColor="pink" borderRadius="5px" icon="girl" />
					</ContainerButtonAlter>

					<AreaMenu>
						<MenuItem><MenuLink href="#">Início</MenuLink></MenuItem>
						<MenuItem><MenuLink href="#">Cortes</MenuLink></MenuItem>
						<MenuItem><MenuLink href="#">Agendamento</MenuLink></MenuItem>
						<MenuItem><MenuLink href="#">Contato</MenuLink></MenuItem>
					</AreaMenu>

					<ButtonMobile href="#" id="btn-mobile"> </ButtonMobile>
				</MenuNavegacao>
				<MenuNavegacaoMobile id="menuPrincipal">
					
					
					<ButtonMobile href="#" id="btn-mobile"> </ButtonMobile>
				</MenuNavegacaoMobile>
			</HeaderContent>
		</HeaderContainer>
	);
}

export { Header };