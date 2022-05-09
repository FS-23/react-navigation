import { getMenus , addMenu} from '../API/menu'
import { useEffect, useState , useContext } from 'react'
import { Outlet } from 'react-router-dom'
function OrderList(){
    let [ orders , setOrders] = useState([])

    useEffect(()=> {
        setOrders(getOrders())
    }, [orders])

    return (
        <>
           <h1>Orders list</h1>
           <div>
               <ul>
                    {
                        orders.map((order , index)=> <li key={index}>{order.name} - {order.price}</li>)
                    }
               </ul>
           </div>

           < Outlet />
        </>
    )
}

export default OrderList