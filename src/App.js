import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import "./app.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Userlist from "./components/Userlist";
import Productlist from "./components/Productlist";
import Newproduct from "./components/Nweproduct";
import Newuser from "./components/Newuser";
import Product from "./components/Product";
import User from "./components/User";
function App() {
  return (
    <>
      {/* <Topbar />
      <div className="container">
        <Sidebar />

       <Home/>
      </div> */}

      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route  path="/user" element={<Userlist/>}></Route>
            <Route path="/user/:userId" element={ <User />}>
             
            </Route>
            <Route path="/newUser" element={<Newuser />}>
              
            </Route>
            <Route path="/products" element={<Productlist />}>
              
            </Route>
            <Route path="/product/:productId" element={<Product />}>
              
            </Route>
            <Route path="/newproduct" element={<Newproduct />}>
              
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
