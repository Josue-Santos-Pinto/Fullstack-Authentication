import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFount from "../pages/NotFound";
import Home from "../pages/Home";
import { RequireAuth } from "../components/RequireAuth";


function MainRoutes () {
    return (
        <Routes>
            <Route  path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={
                <RequireAuth> 
                    <Home />
                </RequireAuth>}/>
            <Route path="*" element={<NotFount />} />
        </Routes>
    )
}

export default MainRoutes