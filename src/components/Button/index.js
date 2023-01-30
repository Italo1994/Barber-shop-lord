
import { ButtonContainer } from './styles';

const Button = ({value, onClick, backgroundColor, color, hover}) => {
	return(
		<ButtonContainer backgroundColor={backgroundColor} color={color} hover={hover} onClick={onClick}>
			{value}
		</ButtonContainer>
	)
}

export { Button };