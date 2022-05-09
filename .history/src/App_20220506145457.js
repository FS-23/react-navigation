
import OrderList from "./components/OrderList";
import EditOrder from "./components/EditOrder";
import OrderDetail from "./components/OderDetail";

import { BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
         <div className="App">
            <OrderList />
            <EditOrder />
        </div>
    </BrowserRouter>
   
  );
}

export default App;
