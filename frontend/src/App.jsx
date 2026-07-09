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
import ProtectedRoute from "./components/ProtectedRoute";

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
<ProtectedRoute>

<DashboardLayout>


<Products/>


</DashboardLayout>

</ProtectedRoute>
}

/>

<Route

path="/dashboard"

element={


<ProtectedRoute>


<DashboardLayout>


<Dashboard/>


</DashboardLayout>


</ProtectedRoute>


}

/>
<Route

path="/products/edit/:id"

element={

<ProtectedRoute>
<DashboardLayout>


<EditProduct/>


</DashboardLayout>

</ProtectedRoute>
}

/>
<Route

path="/products/add"

element={
<ProtectedRoute>
<DashboardLayout>

<AddProduct/>

</DashboardLayout>

</ProtectedRoute>}

/>
<Route

path="/categories"

element={

<ProtectedRoute>
<DashboardLayout>


<Categories/>


</DashboardLayout>
</ProtectedRoute>


}

/>


</Routes>


);


}


export default App;