import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  :root {
    --primary-gradient: linear-gradient(135deg, #6366F1 0%, #4338CA 100%);
    --secondary-gradient: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%);
    --accent-color: #60A5FA;
    --background-color: #312E81;
    --card-background: rgba(255, 255, 255, 0.1);
    --text-primary: #F3F4F6;
    --text-secondary: #D1D5DB;
    --success-color: #34D399;
    --error-color: #F87171;
    --font-primary: 'Poppins', sans-serif;
    --shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 8px 16px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.2);
    --border-radius-sm: 8px;
    --border-radius-md: 16px;
    --border-radius-lg: 24px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-primary);
    background: var(--background-color);
    color: var(--text-primary);
    min-height: 100vh;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  button {
    font-family: var(--font-primary);
    cursor: pointer;
    border: none;
    outline: none;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card {
    background: var(--card-background);
    border-radius: var(--border-radius-md);
    padding: 1.5rem;
    box-shadow: var(--shadow-md);
  }
`;
