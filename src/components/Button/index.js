
import { ButtonContainer } from './styles';

const Button = ({value, onClick}) => {
	return(
		<ButtonContainer onClick={onClick}>
			{value}
		</ButtonContainer>
	)
}

export { Button };