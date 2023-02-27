import $ from 'jquery';
import { useState } from 'react';

import { HeaderContainer, HeaderContent, MenuNavegacao, MenuNavegacaoMobile, ContainerLogo, ContainerButtonAlter, Logo, MenuItem, MenuLink, ButtonMobile, AreaMenu, AreaSubmenu } from './styles';

import { Image } from '../Image';
import { Button } from '../Button';
import { Title } from '../Title';

import Modal from 'react-bootstrap/Modal';

import logo from '../../assets/logo.png';

function Header({ backgroundColor, color, zIndex}) {

	const [fullscreen, setFullscreen] = useState(true);
  	const [show, setShow] = useState(false);
  	const headerColor = { backgroundColor: '#5BBAD5' };

    function handleShow(breakpoint) {
	    setFullscreen(breakpoint);
	    setShow(true);
    }

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
						<MenuItem><MenuLink href="/">Início</MenuLink></MenuItem>
						<MenuItem><MenuLink href="/cortes">Cortes</MenuLink></MenuItem>
						<MenuItem><MenuLink href="/agendamento">Agendamento</MenuLink></MenuItem>
						<MenuItem><MenuLink href="#">Contato</MenuLink></MenuItem>
					</AreaMenu>


					<>
				      <ButtonMobile href="#" id="btn-mobile" onClick={() => handleShow('xxl-down')} > </ButtonMobile>
				      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
				        <Modal.Header closeButton>
				          <Modal.Title>
				          	
				          	<Title text="Pequeno Lord" />
				          </Modal.Title>
				        </Modal.Header>
				        <Modal.Body>
				        	<AreaSubmenu>
								<MenuItem><MenuLink color="#000" href="/">Início</MenuLink></MenuItem>
								<MenuItem><MenuLink color="#000" href="/cortes">Cortes</MenuLink></MenuItem>
								<MenuItem><MenuLink color="#000" href="/agendamento">Agendamento</MenuLink></MenuItem>
								<MenuItem><MenuLink color="#000" href="#">Contato</MenuLink></MenuItem>
							</AreaSubmenu>
				        </Modal.Body>
				      </Modal>
    				</>

				</MenuNavegacao>
				
			</HeaderContent>
		</HeaderContainer>
	);
}

export { Header };