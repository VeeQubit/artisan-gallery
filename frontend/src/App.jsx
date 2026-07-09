import {

Routes,

Route

} from "react-router-dom";


import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import DashboardLayout from "./layouts/DashboardLayout";

import Products from "./pages/Products";

function App(){


return(


<Routes>


<Route

path="/"

element={<Login/>}

/>

<Route

path="/products"

element={


<DashboardLayout>


<Products/>


</DashboardLayout>


}

/>

<Route

path="/dashboard"

element={


<DashboardLayout>


<Dashboard/>


</DashboardLayout>


}

/>


</Routes>


);


}


export default App;