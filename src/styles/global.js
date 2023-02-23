import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		font-family: 'Josefin Sans', sans-serif;
	}

	body {
		background-color: #FFF;
		color: #FFF;
		height: 100vh;
		width: 100%;
	}

	h1, h2, h3, h4 {
		font-family: 'Open Sans', sans-serif;
	}
`

// background-color: rgba(30,144,255, .8);
// background-color: #1C1C1C;