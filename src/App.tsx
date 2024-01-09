import './App.css'
import ResponsiveAppBar from './components/Header'
import Slider from './components/Slider'
import Home from './components/pages/Home'
import Footer from './components/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, brown } from '@mui/material/colors';


declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

function App() {

  
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
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
