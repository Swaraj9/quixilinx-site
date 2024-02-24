import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
