import { ContainerImage } from './styles';

function Image( {src, width, height, alt, borderRadius } ) {
	return(
		<ContainerImage borderRadius={borderRadius}>
			<img src={src} width={width} height={height} alt={alt} />
		</ContainerImage>
	);
}

export { Image };