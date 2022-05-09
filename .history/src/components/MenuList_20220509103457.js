import { getMenus , addMenu} from '../API/menu'
import { useEffect, useState , useContext } from 'react'
import { Outlet } from 'react-router-dom'
function MenuList(){
    let [ menus , setMenus] = useState([])

    useEffect(()=> {
        setMenus(getMenus())
    }, [menus])

    return (
        <>
           <h1>Liste des menus</h1>
           <div>
               <ul>
                    {
                        menus.map((menu , index)=> <li key={index}>{menu.name} - {menu.price}</li>)
                    }
               </ul>
           </div>

           < Outlet />
        </>
    )
}

export default MenuList