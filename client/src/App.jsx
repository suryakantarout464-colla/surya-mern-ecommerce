
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import {Box} from '@mui/material'
import DataProvider from './context/DataProvider.jsx';
import DetailView from './components/details/DetailView.jsx';
import Cart from './components/cart/Cart.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OrderSuccess from "./components/OrderSuccess";

function App() {
  

  return (
    <>
      <DataProvider>
    <BrowserRouter>
           <Header/>
             <Box style={{marginTop:54}}>
              <Routes>
               <Route path='/' element ={<Home/>} />
               <Route path='/product/:id' element={<DetailView/>}/>
               <Route path='/cart' element={<Cart/>}/>
               <Route path="/order-success" element={<OrderSuccess />} />
              </Routes> 
            </Box>
      </BrowserRouter>  
      </DataProvider>
    </>
  )
}

export default App;
