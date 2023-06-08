import { Body, Container, Menu  } from "./styles"
import { faUser, faUsers, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { MainRoutes } from "../../routes/MainRoutes"

import MenuItem from "../../components/MenuItem"
import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { RequireAuth } from "../../components/RequireAuth"
import MyAccount from "../MyAccount"
import Users from "../Users"
import Login from "../Login"
import Register from "../Register"
import NotFount from "../NotFound"
import { useEffect } from "react"


function Home(){

    const navigate = useNavigate();

useEffect(() => {
  const handlePopstate = (event: any) => {
    if (event.state?.prevPath) {
        history.replaceState({ prevPath: window.location.pathname }, '');
      navigate(event.state.prevPath);
    } else {
      navigate('/myaccount');
    }
  };

  window.addEventListener('popstate', handlePopstate);
  


  return () => {
    window.removeEventListener('popstate', handlePopstate);
  };
}, [navigate]);

    
    
    return (
        <Container>
            <Menu>
                {/*Minha Conta */}
                    <MenuItem link='/myaccount' icon={faUser} />

                {/*Todos Usuarios */}
                    <MenuItem link='/users' icon={faUsers} />
                {/*Sair */}
                    
            </Menu>
            <Body>
                <Outlet />
            </Body>
        </Container>
    )
}

export default Home