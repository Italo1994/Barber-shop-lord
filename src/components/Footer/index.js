import { FooterContainer, FooterContent, AreaSocial, AreaNavegacao, WrapperFooter, Copyright } from './styles';
import { MenuLink, Logo } from '../Header/styles';

import { Separator } from '../Separator';

import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

function Footer({ backgroundColor, color }) {
	return(
		<FooterContainer backgroundColor={backgroundColor} >
			<FooterContent>
				<WrapperFooter>
					<AreaNavegacao>
						<Logo href="/">Pequeno Lord</Logo>
					</AreaNavegacao>

					<AreaSocial>
						<p>Nossas redes sociais</p>
						<div>
							<a href="https://www.instagram.com/pequenolordoficial/" target="_blank"> <FaInstagram size={27} color="#C435A7" /></a>
							<a href="https://api.whatsapp.com/send?phone=5584998183614" target="_blank"> <FaWhatsapp size={27} color="#2EB600" /></a>
						</div>
					</AreaSocial>

					<Separator />

					<Copyright>
						<p>&copy;2023 italohortiz.com</p>
						<p>Todos os direitos reservados</p>
					</Copyright>
				</WrapperFooter>
			</FooterContent>
		</FooterContainer>
	);
}

export { Footer };