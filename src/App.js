import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes className=''>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<ProductList/>} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
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
