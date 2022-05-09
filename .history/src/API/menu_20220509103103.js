const menus = [];

export function getMenus(){
    return menus
}

export function addMenu(obj){
    obj.id = menus.length + 1;
    menus.push(obj)
    return menus
}

export function getMenu(id){
    let menu = menus.find((_menu)=> _menu.id == id)
    return menu
}

export function changeMenuStatus(id, status){
    for(let menu of menus){
        if(menu.id == id) {
            menu.status = status
            break
        }
    }

    return menus
    //   menus.forEach( menu => {
    //       if(menu.id == id) menu.status = status
    //   })
}

export function removeMenu(id){
     menus.forEach( (menu , index) => {
         if(menu.id == id) menus.splice(index,1)
     })

     return menus
}



