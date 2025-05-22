import Home from "./Pages/Home/Home"
import UsersList from "./Pages/Users/UsersList"
import NewUser from "./Pages/NewUser/NewUser"
import Products from "./Pages/Products/Products"
import Product from "./Pages/product/Product"
let routes=[
    {path:"/",element:<Home />},
    {path:"/users",element:<UsersList />},
    {path:"/newUser",element:<NewUser />},
    {path:"/products",element:<Products />},
    {path:"/product/:productID",element:<Product />}


]

export default routes