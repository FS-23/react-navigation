import { useState } from "react"
import { addMenu  , getMenus} from "../API/menu"
import { useParams } from "react-router-dom"

export default function EditMenu(){
    let [inputs , setInputs] = useState({})
    let { id } = useParams()
    function handleOnChange(event){
           let name = event.target.name
           let value = event.target.value

           setInputs(inputs => ({...inputs, [name]: value}))
          
    }

    function handleOnSubmit(event){
        event.preventDefault();
        console.log('inputs:', inputs)
        addMenu(inputs)


        console.log('orders:', getMenus())
    }
  
    return(
        <> 
            <h1>Menu {id}</h1>
           <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                  <label className="form-label">Titre</label>
                  <input className="form-control" 
                    type="text" 
                    onChange={handleOnChange}
                    placeholder="name" 
                    name = "name" />
              </div>
              <div className="form-group">
                  <label className="form-label">Price</label>
                  <input className="form-control" 
                    type="number" 
                    onChange={handleOnChange}
                    placeholder="price" 
                    name = "price" />
              </div>
              <div className="form-group">
                  <label className="form-label">Ingredient</label>
                  <textarea className="form-control" 
                        type="text" 
                        onChange={handleOnChange}
                        placeholder="ingredient" 
                        name = "ingredient" >

                   </textarea>
              </div>

              <div className="form-group">
                  <button>Save</button>
              </div>
           </form>

       
        </>
    )
}