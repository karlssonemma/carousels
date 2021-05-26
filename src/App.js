import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SliderOne from './components/SliderOne';
import { LightTheme, DarkTheme } from './theme/theme';
import { GlobalStyle } from './components/GlobalStyle';

const Container = styled.main`
  width: 100vw;
  height: max-content;
  background-color: ${props => props.theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {

  const [theme, setTheme] = useState(LightTheme);


  const handleChangeTheme = () => {
    (theme === LightTheme) ? setTheme(DarkTheme) : setTheme(LightTheme) 
  };

 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <button onClick={() => handleChangeTheme()}>Change theme</button>

        <SliderOne />

      </Container>
    </ThemeProvider>
  );
}

export default App;
