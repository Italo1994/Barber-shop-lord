import { ContainerTitle } from './styles';

function Title( { text, mainTitle, size, center, color } ) {
	if(mainTitle) {
		return(
			<ContainerTitle>
				<h1>{text}</h1>
			</ContainerTitle>
		);
	}

	return (
		<ContainerTitle>
			<h2>{text}</h2>
		</ContainerTitle>
	);
}

export { Title };