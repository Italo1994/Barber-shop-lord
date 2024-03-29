import { ContainerCadastro, Content } from './styles';

import { Form } from '../../components/Form';
import { Image } from '../../components/Image';
import { Title } from '../../components/Title';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'

const Cadastro = () => {
	return(
		<ContainerCadastro>
			<Header />
			<Content>
				<h2>FAÇA SEU CADASTRO</h2>
				<Form cadastro="true" color="#000" />
			</Content>
		</ContainerCadastro>
	);
}

export { Cadastro };