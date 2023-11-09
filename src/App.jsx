
import { Link, Route, Routes } from 'react-router-dom'
import './index.css'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/home'
import Green from './components/Green'
function App() {
  

  return (
   
  <div id="container">
    <h1>Hello React Router!</h1>
    <div id="navbar">
        <Link to = '/Green'>Green</Link>
        <Link to = '/Blue'>Blue</Link>
        <Link to = '/Red'>Red</Link>
        <Link to = '/Home'>Home</Link>
  </div>
  <div id="main-section">
    <Routes>
      <Route path='/Green' element ={<Green/> } />
      <Route path="/blue" element={ <Blue/> } />
      <Route path="/red" element={ <Red/> } />
      <Route path='/home' element = { <Home/> } />
    </Routes>
  </div>
  </div>
    
  )
}

export default App
