// import { useForm } from 'react-hook-form';

import { ContainerLogin, Content, AreaLogo } from './styles';

import { Logo } from '../../components/Header/styles';

import { Form } from '../../components/Form';
import { Image } from '../../components/Image';

import bannerBarber from '../../assets/barber_banner.png';

import { HiScissors } from 'react-icons/hi';

const Login = () => {
	return(
		<ContainerLogin>
			<Content>
				<AreaLogo>
					<Logo href="#">Pequeno Lord</Logo>
					<span><HiScissors size={69} color="orange" /></span>
				</AreaLogo>
				<Form hasLink="false" />
			</Content>
		</ContainerLogin>
	);
}

export  { Login };