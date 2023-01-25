import { useNavigate } from 'react-router-dom';


function Agendamento() {
	const navigate = useNavigate();

	const handleHome = () => {
		navigate("/home");
	}

	return(
		<>
		<h1>Agendamento</h1>
		<button onClick={handleHome}>Voltar para a home</button>
		</>
	);
}

export { Agendamento };