import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

 import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
  
function App() {
   
   
  return (
    <>
    <div className='darkMode'>
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
      
    <Home />
    <Skills />
    <Projects />
    <Contact />
     </div>
     
     
  
    </>
  )
}

export default App
