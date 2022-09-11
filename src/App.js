import React from 'react';

import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {GlobalProvider} from './context/GlobalState'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Reports from './components/Reports';
import Products from './components/Products';

import 'bootstrap/dist/css/bootstrap.min.css'
import BackgroundImagae from './images/bg.jpg'

function App() {
  return (
<GlobalProvider>
<>
<Router>
    <Navbar />
    <Routes>
      <Route path='/' 
      element={ <div className='p-5 rounded' style={{width: '600px', margin:'20px auto', background: `url(${BackgroundImagae})`}} >
         <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction /> 
   </div>}/>
      <Route path='reports' element={<Reports />} />
      <Route path='tBalance' element={<Products />}/>
    </Routes>
  </Router>
</>
 
   </GlobalProvider>
     
  );
}

export default App;
