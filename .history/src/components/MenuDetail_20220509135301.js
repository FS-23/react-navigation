import { useParams } from "react-router-dom"
export default function MenuDetail(){
    console.log('useParams:', useParams())
    let { id } = useParams()
    return(
        <h1>Menu {id} </h1>
    )
}