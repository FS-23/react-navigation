import { getOrders , addOrder} from '../API/orders'
import { useEffect } from 'react'
function OrderList(){
  
  
    useEffect(()=> {
        addOrder({
            name: "Pizza hut",
            price: 12
        })


        console.log('getOrders:', getOrders() )

    })
    return (
        <>
           <h1>Orders list</h1>
        </>
    )
}

export default OrderList