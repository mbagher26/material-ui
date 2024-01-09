import './App.css'
import ResponsiveAppBar from './components/Header'
import Slider from './components/Slider'
import Home from './components/pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <ResponsiveAppBar/>
     <Slider/>
     <Home/>
     <Footer/>
    </>
  )
}

export default App
