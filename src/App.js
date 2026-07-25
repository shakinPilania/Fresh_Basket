import './App.css';
import { Route,Routes } from 'react-router-dom';

//* importing the usefull component 
import Navbar from './Component.js/Navbar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Basket from './Pages/Basket';

function App() {
  return (
    <div className='w-full' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/basket' element={<Basket/>} />
      </Routes>
    </div>
  );
}

export default App;
