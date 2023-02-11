import { ContainerCadastro, Content } from './styles';

import { Form } from '../../components/Form';
import { Image } from '../../components/Image';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const Cadastro = () => {
	return(
		<ContainerCadastro>
			<Header />
			<Content>
				<h1>Cadastre-se</h1>
				<Form cadastro="true" color="#000" />
			</Content>
			
		</ContainerCadastro>
	);
}

export { Cadastro };