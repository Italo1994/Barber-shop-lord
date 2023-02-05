
import { ButtonContainer } from './styles';

const Button = ({value, width, height, onClick, backgroundColor, color, hover, borderRadius}) => {
	return(
		<ButtonContainer width={width} height={height} backgroundColor={backgroundColor} color={color} hover={hover} borderRadius={borderRadius} onClick={onClick}>
			{value}
		</ButtonContainer>
	)
}

export { Button };