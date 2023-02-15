// import { useForm } from 'react-hook-form';

import { ContainerLogin, Content, AreaLogo } from './styles';

import { Logo } from '../../components/Header/styles';

import { Form } from '../../components/Form';
import { Image } from '../../components/Image';

import bannerBarber from '../../assets/barber_banner.png';
import logo from '../../assets/logo.png';

import { HiScissors } from 'react-icons/hi';

const Login = () => {
	return(
		<ContainerLogin>
			<Content>
				<AreaLogo>
					<Image src={logo} width="500px" />
				</AreaLogo>
				<Form hasLink="false" login="true" />
			</Content>
		</ContainerLogin>
	);
}

export  { Login };