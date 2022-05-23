import './App.css'
import Welcome from './pages/Welcome'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Welcome/>
      <Footer/>
    </div>
  )
}

export default App
