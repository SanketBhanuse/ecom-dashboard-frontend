import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar/>
         <Routes className=''>
          <Route path='/' element={<h1 className='text-[20px] font-bold'>product listing component</h1>}/>
          <Route path='/add' element={<h1 className='text-[20px] font-bold'>add product component</h1>}/>
          <Route path='/update' element={<h1 className='text-[20px] font-bold'>update product component</h1>}/>
          <Route path='/logout' element={<h1 className='text-[20px] font-bold'>logout component</h1>}/>
          <Route path='/profile' element={<h1 className='text-[20px] font-bold'>profile component</h1>}/>
          <Route path='/signup' element={<SignUp/>}/>
         </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
