const orders = [];

export function getOrders(){
    return orders
}

export function addOrder(obj){
    obj.id = orders.length + 1;
    orders.push(obj)
    return orders
}

export function getOrder(id){
    let order = orders.find((_order)=> _order.id == id)
    return order
}

export function changeOrderStatus(id, status){
    for(let order of orders){
        if(order.id == id) {
            order.status = status
            break
        }
    }

    return orders
    //   orders.forEach( order => {
    //       if(order.id == id) order.status = status
    //   })
}

export function removeOrder(id){
     orders.forEach( (order , index) => {
         if(order.id == id) orders.splice(index,1)
     })

     return orders
}



