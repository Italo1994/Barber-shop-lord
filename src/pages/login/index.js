// import { useForm } from 'react-hook-form';

import { ContainerLogin, Content, AreaLogo } from './styles';

import { Form } from '../../components/Form';

const Login = () => {
	return(
		<ContainerLogin>
			<Content>
				<AreaLogo>
					
				</AreaLogo>
				<Form hasLink="false" login="true" />
			</Content>
		</ContainerLogin>
	);
}

export  { Login };