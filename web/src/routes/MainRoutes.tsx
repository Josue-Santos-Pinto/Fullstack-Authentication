import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFount from "../pages/NotFound";
import Home from "../pages/Home";
import { RequireAuth } from "../components/RequireAuth";
import Users from "../pages/Users";
import MyAccount from "../pages/MyAccount";


export const MainRoutes = () => {


    return (
        <Routes>

            
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register /> } />
            <Route path="/" element={<RequireAuth><Home /></RequireAuth>}>
                <Route path="myaccount" element={<MyAccount />} />
                <Route path="users" element={<Users />} />
            </Route>
   
            <Route path="*" element={<NotFount />} />
        </Routes>
    )
}

