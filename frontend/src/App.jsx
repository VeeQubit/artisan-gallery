import {

Routes,

Route

} from "react-router-dom";


import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import DashboardLayout from "./layouts/DashboardLayout";

import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Categories from "./pages/Categories";
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
<Route

path="/products/edit/:id"

element={


<DashboardLayout>


<EditProduct/>


</DashboardLayout>


}

/>
<Route

path="/products/add"

element={

<DashboardLayout>

<AddProduct/>

</DashboardLayout>

}

/>
<Route

path="/categories"

element={


<DashboardLayout>


<Categories/>


</DashboardLayout>


}

/>


</Routes>


);


}


export default App;