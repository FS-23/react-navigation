import { getOrders } from '../API/orders'

function OrderList(){
    console.log('orders:', getOrders())
    return (
        <>
           <h1>Orders list</h1>
        </>
    )
}

export default OrderList