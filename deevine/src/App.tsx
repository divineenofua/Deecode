import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

 import Home from './components/Home'
 import Projects from './components/Projects'
 import NavBar from './components/NavBar';
  
function App() {
   
   
  return (
    <>
 
    <div className='darkMode'>
    <NavBar />
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
         
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  
     </div>
     
     
  
    </>
  )
}

export default App
