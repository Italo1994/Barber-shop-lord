import { LogoContainer } from './styles';

import { useNavigate } from 'react-router-dom';

import { Image } from '../Image';

import logo from '../../assets/logo.png';

function Logo({src}) {

	const navigate = useNavigate;
	const redirectHome = () => {
		navigate("/");
	}

	return(
		<LogoContainer href="#" onClick={redirectHome}>
			
		</LogoContainer>
	);
}

export { Logo };