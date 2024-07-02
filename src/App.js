import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes className=''>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<h1 className='text-[20px] font-bold'>product listing component</h1>} />
            <Route path='/add' element={<h1 className='text-[20px] font-bold'>add product component</h1>} />
            <Route path='/update' element={<h1 className='text-[20px] font-bold'>update product component</h1>} />
            <Route path='/logout' element={<h1 className='text-[20px] font-bold'>logout component</h1>} />
            <Route path='/profile' element={<h1 className='text-[20px] font-bold'>profile component</h1>} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
