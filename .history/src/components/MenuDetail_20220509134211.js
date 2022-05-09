import { useParams } from "react-router-dom"
export default function MenuDetail(){
    console.log('useParams:', useParams())
    return(
        <h1>order detail </h1>
    )
}