import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../contexts/Context";

type Props = {
    children: JSX.Element
}


export const RequireAuth = ({children}: Props) => {
    const {state, dispatch} = useContext(Context)

    const isAuth = state.user.token != ''
    
    
           if(isAuth){
            return children
        } else {
            return <Navigate to='/login' replace />
        }
    
   
    
}