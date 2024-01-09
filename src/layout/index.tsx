import ResponsiveAppBar from '../components/Header'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, brown } from '@mui/material/colors';
import { ReactElement } from 'react';


declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

function Layout({ children }: { children: ReactElement }) {
  const theme = createTheme({
    palette: {
      primary: {
        light: brown[50],

        dark: brown[700],
        darker: brown[900],
        main: green[400],
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Slider />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
