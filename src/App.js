import Login from './component/Login';
import Home from './component/Home';
import Shop from './component/Shop';
import Contact from './component/Contact';
import Signup from './component/Signup';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
     
      <Routes>
<Route path="/" element={<Home />} />

<Route path='/login' element={<Login />} />
<Route path='/contact' element={<Contact />} />
<Route path='/shop' element={<Shop />} />
<Route path='/signup' element={<Signup />} />


      </Routes>
      
        
        
      
      
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
