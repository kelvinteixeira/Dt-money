import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF;

  }

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media(max-width: 1080px) {
			font-size: 93.75%; // 15px
		}

		@media(max-width: 720px) {
			font-size: 87.5%; // 14px
		}

		@media(max-width: 480px) {
			font-size: 81.3%; // 13px
		}

		@media(max-width: 320px) {
			font-size: 75%; // 12px
		}
	}

	body {
    background: var(--background);
		-webkit-font-smoothing:antialiased;
	}

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

  .summary-icons {
    font-size: 2rem;
  }

  .react-modal-overlay {
    background: rgb(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.4s;
    font-size: 2rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`