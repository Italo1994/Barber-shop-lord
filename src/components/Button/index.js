
import { ButtonContainer } from './styles';

import { IoMdMan } from 'react-icons/io';
import { IoMdWoman } from 'react-icons/io';

import { TbMoodBoy } from 'react-icons/tb';
import { CgGirl } from 'react-icons/cg';

const Button = ( {value, width, height, onClick, backgroundColor, color, hover, borderRadius, icon} ) => {

	if(icon == "boy") {
		return (
			<ButtonContainer width={width} height={height} backgroundColor={backgroundColor} color={color} hover={hover} borderRadius={borderRadius} onClick={onClick}>
				{<TbMoodBoy size={20} color="#000" />}
			</ButtonContainer>
		);
	}
	if(icon === "girl") {
		return (
			<ButtonContainer width={width} height={height} backgroundColor={backgroundColor} color={color} hover={hover} borderRadius={borderRadius} onClick={onClick}>
				{<CgGirl size={20} color="#000" />}
			</ButtonContainer>
		);
	}
	
	return(
		<ButtonContainer width={width} height={height} backgroundColor={backgroundColor} color={color} hover={hover} borderRadius={borderRadius} onClick={onClick}>
			{value}
		</ButtonContainer>
	)

}

export { Button };