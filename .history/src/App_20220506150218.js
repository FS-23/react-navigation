
import OrderList from "./components/OrderList";
import EditOrder from "./components/EditOrder";
import OrderDetail from "./components/OderDetail";
import Home from "./components/Home";

import { BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
             <Route path="/" element={ <Home />} ></Route>
             <Route path="/orders" element={ <OrderList />} >
                <Route path="/orders/detail" element={ <OrderDetail />} ></Route>
                <Route path="/orders/add" element={ <EditOrder />} ></Route>
             </Route>
             
        </Routes>
      
    </BrowserRouter>
   
  );
}

export default App;
