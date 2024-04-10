import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

 import Home from './components/Home'
 import Projects from './components/Projects'
 import NavBar from './components/NavBar';
 import { useState } from 'react';
  
function App() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Function to toggle the boolean value
  const toggleState = () => {
    setIsToggleOn(!isToggleOn);}

  return (
    <>
 
    <div className={ isToggleOn ? 'bg-darkMode-background text-darkMode-text' : 'bg-lightMode-background text-lightMode-text'}>
    <NavBar   toggleState={toggleState}  />
    <Router>
      <Routes>
      <Route path="/" element={<Home toggle={isToggleOn} />} /> 
        <Route path="/projects" element={<Projects toggle={isToggleOn} />} />
      </Routes>
    </Router>
  
     </div>
     
     
  
    </>
  )
}

export default App
