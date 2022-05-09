import { Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
           <Header />

            <Outlet />
            <Footer/>
        
        </>
    )
}