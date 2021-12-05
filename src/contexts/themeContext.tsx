import React, { createContext, ReactNode, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ThemeContextProps {
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

export const CustomThemeContext = createContext({} as ThemeContextProps);

export function CustomThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(dark)

  function toggleTheme() {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  return (
    <StyledProvider theme={theme}>
      <CustomThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </CustomThemeContext.Provider>
    </StyledProvider>
  );
}