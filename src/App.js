import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';


  
function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
         <Routes>
           <Route exact path='/' element={<Home/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
