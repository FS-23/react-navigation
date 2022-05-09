const orders = [];

function getOrders(){
    return orders
}

function addOrder(obj){
    obj.id = orders.length + 1;
    orders.push(obj)
    return orders
}

function getOrder(id){
    let order = orders.find((_order)=> _order.id == id)
    return order
}

function changeOrderStatus(id, status){
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

function removeOrder(id){
     orders.forEach( (order , index) => {
         if(order.id == id) orders.splice(index,1)
     })

     return orders
}



