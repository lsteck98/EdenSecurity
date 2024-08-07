import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
      <div className="App">
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path='/about' element={<About />}/>
          </Route>
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App