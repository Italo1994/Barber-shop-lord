import styled from 'styled-components';

export const ContainerLogin = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 10px;

	background-color: #5BBAD5;

	overflow-y: hidden;
`

export const Content = styled.div`
@media (max-width: 550px) {
	background-color: rgba(0, 0, 0, 0);
	
	width: 90%;
	height: 500px;

	padding: 40px 20px;
	border-radius: 15px;
}
`

// export const Row = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	align-items: center;
// 	justify-content: center;

// 	width: 100%;
// 	height: 60px;

// 	padding: 10px 0;

// 	h1 {
// 		width: 100%;
// 		color: #FFF;

// 		font-family: 'Open Sans', sans-serif;
// 		font-size: 2rem; // 1.75rem = 28px
// 		font-weight: 700;
// 		text-align: center;
		
// 	}
// `