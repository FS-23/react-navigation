
import MenuList from "./components/MenuList";
import EditMenu from "./components/EditMenu";
import MenuDetail from "./components/MenuDetail";
import Home from "./components/Home";
import Menu from "./pages/Menu";

import { BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
             <Route path="/" element={ <Home />} ></Route>
             <Route path="/menu" element={ <Menu />} >
                <Route  path="list" element={ <MenuList />}></Route>
                <Route path="detail" element={ <MenuDetail />} ></Route>
                <Route path="add" element={ <EditMenu />} ></Route>
                <Route path="*" element= {
                  (<h2 style={{color: "red"}}>oooops la ressource que vous recherchez semple ne pas exister</h2>)
                }></Route>
             </Route>
             
        </Routes>
      
    </BrowserRouter>
   
  );
}

export default App;
