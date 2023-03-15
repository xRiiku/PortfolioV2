import '../src/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Sidebar } from './components/sidebar'


function App() {
  return (
    
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/skills' element={ <Skills /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </Router>
    
  );
}

export default App;
