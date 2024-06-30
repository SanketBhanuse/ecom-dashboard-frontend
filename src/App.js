import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar/>
         <Routes>
          <Route path='/' element={<h1>product listing component</h1>}/>
          <Route path='/add' element={<h1>add product component</h1>}/>
          <Route path='/update' element={<h1>update product component</h1>}/>
          <Route path='/logout' element={<h1>logout component</h1>}/>
          <Route path='/profile' element={<h1>profile component</h1>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
