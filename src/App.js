

import { Routes,Route } from 'react-router-dom';
import '../src/Dashboard.jsx/Hoverline'
import Mens from './Prodects/mens';
import Kids from './Prodects/kids';
import Bags from './Prodects/Bags';
import Home from '../src/Dashboard.jsx/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <>
    
    <Routes>
     <Route path= "/" element={<Home/>}/>
     <Route path= "/bags" element={<Bags/>}/>
     <Route path= "/kids" element={<Kids/>}/>
     <Route path= "/mens" element={<Mens/>}/>



    </Routes>
    
    
    </>
  );
}

export default App;
