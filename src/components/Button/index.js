
import { ButtonContainer } from './styles';

import { IoMdMan } from 'react-icons/io';
import { IoMdWoman } from 'react-icons/io';

const Button = ({value, width, height, onClick, backgroundColor, color, hover, borderRadius, icon}) => {

	if(icon === "boy") {
		<ButtonContainer width={width} height={height} backgroundColor={backgroundColor} color={color} hover={hover} borderRadius={borderRadius} onClick={onClick}>
			{<IoMdMan size={20} color="#000" />}
		</ButtonContainer>
	}
	if(icon === "girl") {
		<ButtonContainer width={width} height={height} backgroundColor={backgroundColor} color={color} hover={hover} borderRadius={borderRadius} onClick={onClick}>
			{<IoMdWoman size={20} color="#000" />}
		</ButtonContainer>
	}
	
	return(
		<ButtonContainer width={width} height={height} backgroundColor={backgroundColor} color={color} hover={hover} borderRadius={borderRadius} onClick={onClick}>
			{value}
		</ButtonContainer>
	)

}

export { Button };