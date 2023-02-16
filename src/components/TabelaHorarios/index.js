import { ContainerTabelaHorarios, TabelaContent } from './styles';

import { Button } from '../Button';

function TabelaHorarios( {nome} ) {
	return (
		<ContainerTabelaHorarios>
			<TabelaContent>

				<Button value="09:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="12:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="15:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />

				<Button value="09:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="12:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="15:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />

				<Button value="10:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="13:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="16:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />

				<Button value="10:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="13:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="16:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />

				<Button value="11:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="14:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="17:00" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />

				<Button value="11:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				<Button value="14:30" width="100%" height="69px" borderRadius="20px" backgroundColor="#00060" hover="rgba(0,0,0,.4)" />
				
			</TabelaContent>
		</ContainerTabelaHorarios>
	);
}

export { TabelaHorarios };