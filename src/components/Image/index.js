import { ContainerImage } from './styles';

function Image( {src, width, height, alt} ) {
	return(
		<ContainerImage>
			<img src={src} width={width} height={height} alt={alt} />
		</ContainerImage>
	);
}

export { Image };