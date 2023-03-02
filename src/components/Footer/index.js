import { FooterContainer, FooterContent, AreaSocial, AreaNavegacao, WrapperFooter } from './styles';
import { MenuLink, Logo } from '../Header/styles';

import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

function Footer({ backgroundColor, color }) {
	return(
		<FooterContainer backgroundColor={backgroundColor} >
			<FooterContent>
				<WrapperFooter>
					<AreaNavegacao>
						<Logo href="/">Pequeno Lord</Logo>
						<MenuLink color="#FFF" href="/">Início</MenuLink>
						<MenuLink color="#FFF" href="/cortes">Cortes</MenuLink>
						<MenuLink color="#FFF" href="/agendamento">Agendamento</MenuLink>
						<MenuLink color="#FFF" href="#">Contato</MenuLink>
					</AreaNavegacao>

					<AreaSocial>
						<a href="https://www.instagram.com/pequenolordoficial/" target="_blank"> <FaInstagram size={27} color="#C435A7" /></a>
						<a href="https://api.whatsapp.com/send?phone=5584998183614" target="_blank"> <FaWhatsapp size={27} color="#2EB600" /></a>
					</AreaSocial>
				</WrapperFooter>
				
				<p>&copy; 2023 Copyright. <span>italohortiz.com</span></p>
			</FooterContent>
		</FooterContainer>
	);
}

export { Footer };