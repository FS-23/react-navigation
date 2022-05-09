import { getOrders , addOrder} from '../API/orders'
import { useEffect, useState , useContext } from 'react'
function OrderList(){
    let [ orders , setOrders] = useState([])
    useEffect(()=> {
        addOrder({
            name: "Pizza hut",
            price: 12
        })
        // console.log('getOrders:', getOrders() )  
        
        setOrders(getOrders())
    }, [orders])

    return (
        <>
           <h1>Orders list</h1>
           <div>
               <ul>
                 {
                    orders.map((order , index)=> <li key={index}>order.name</li>)
                 }
               </ul>
           </div>
        </>
    )
}

export default OrderList