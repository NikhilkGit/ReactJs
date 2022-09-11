import React,{useContext} from 'react'
import './Navbar.css'
import { GlobalContext } from '../context/GlobalState'

export default function Products() {

  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='products'>
        <h1 className='headline'>Total Balance</h1>   
        <h2 className='headline'>${total}</h2> 
    </div>
  )
}
