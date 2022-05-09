import { getOrders , addOrder} from '../API/orders'
import { useEffect, useState , useContext } from 'react'
function OrderList(){
    let [ orders , setOrders] = useState([])
    let [ user , setUser] = useState({})
    useEffect(()=> {
        addOrder({
            name: "Pizza hut",
            price: 12
        })
        console.log('getOrders:', getOrders() )   
    }, [orders,user])

    return (
        <>
           <h1>Orders list</h1>
        </>
    )
}

export default OrderList