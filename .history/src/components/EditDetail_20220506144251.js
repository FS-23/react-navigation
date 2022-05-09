import { useState } from "react"

export default function EditOrder(){
    let [inputs , setInputs] = useState({})
    function handleOnChange(event){
           let name = event.target.name
           let value = event.target.value

           setInputs(inputs => ({...inputs, [name]: value}))
          
    }

    function handleOnSubmit(event){
        event.preventDefault();
        console.log('inputs:', inputs)
    }
  
    return(
        <>
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