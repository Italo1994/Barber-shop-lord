import { InputContainer } from './styles';

const Input = ({ type, placeholder, ...rest}) => {
	return(
		<InputContainer>
			<input type={type} placeholder={placeholder} {...rest} />
		</InputContainer>
	);
}

export { Input };