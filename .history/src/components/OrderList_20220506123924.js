import { getOrders , addOrder} from '../API/orders'

function OrderList(){
    console.log('orders add',addOrder({
        name: "Pizza hut",
        price: 12
    }))
    

    setTimeout( function(){
        console.log('orders:', getOrders())
    }, 3000)
    return (
        <>
           <h1>Orders list</h1>
        </>
    )
}

export default OrderList