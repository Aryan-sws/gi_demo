import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
