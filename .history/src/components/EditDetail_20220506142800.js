import { useState } from "react"

export default function EditOrder(){
    let [inputs , setInputs] = useState({})
    function handleOnChange(event){
           let name = event.target.name
           let value = event.target.value

           setInputs(inputs => ({...inputs, [name]: value}))

    }
    return(
        <>
           <form >
              <div className="form-group">
                  <label className="form-label">Titre</label>
                  <input className="form-control" 
                    type="text" 
                    placeholder="name" 
                    name = "name" />
              </div>
              <div className="form-group">
                  <label className="form-label">Price</label>
                  <input className="form-control" 
                    type="number" 
                    placeholder="price" 
                    name = "price" />
              </div>
              <div className="form-group">
                  <label className="form-label">Ingredient</label>
                  <textarea className="form-control" 
                        type="text" 
                        placeholder="ingredient" 
                        name = "ingredient" >

                   </textarea>
              </div>
           </form>
        </>
    )
}