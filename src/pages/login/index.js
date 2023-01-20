// import { useForm } from 'react-hook-form';

import { ContainerLogin, Content } from './styles';

import { Form } from '../../components/Form';
import { Image } from '../../components/Image';

import bannerBarber from '../../assets/barber_banner.png';

const Login = () => {
	return(
		<ContainerLogin>
			<Content>
				<Image src={bannerBarber} width={100} height={100} alt="Banner login" />
				<Form hasLink="false" />
			</Content>
		</ContainerLogin>
	);
}

export  { Login };