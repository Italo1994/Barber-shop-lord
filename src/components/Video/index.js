import { VideoContainer } from './styles';

function Video() {
	return(
		<VideoContainer>
			<iframe width="420" height="315"
				src="https://www.youtube.com/embed/tgbNymZ7vqY">
			</iframe>
		</VideoContainer>
	)
}

export { Video };