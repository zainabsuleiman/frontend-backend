import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import './App.css';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import Header from './pages/Header';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      <Header />
        <ToastContainer />
        <Routes>
          <Route  element={<Home/>}    path="/" />
          <Route   element={<AddEdit/>} path="/add"  />
          <Route  element={<AddEdit/>} path="/update/:id"   />
          <Route   element={<View/>} path="/view/:id"  />
          <Route  element={<About/>}  path="/about"  />
        </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
