import { ContainerImage } from './styles';

function Image( {src, width, height, alt, borderRadius, display } ) {
	return(
		<ContainerImage borderRadius={borderRadius} display={display}>
			<img src={src} width={width} height={height} alt={alt} />
		</ContainerImage>
	);
}

export { Image };