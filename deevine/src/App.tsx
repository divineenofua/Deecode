import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

 import Home from './components/Home'
 import Projects from './components/Projects'
 import NavBar from './components/NavBar';
//  import { useState } from 'react';
  
function App() {
  // const [mode, setMode] = useState(false);

  // const handleSetMode = () => {
  //   setMode(!mode);
  // };
   
  return (
    <>
 {/* className={mode ? 'bg-darkMode-background text-darkMode-text' : 'bg-lightMode-background text-lightMode-text'} */}
    <div  >
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
