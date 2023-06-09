import { useContext, useEffect, useState } from "react"
import { Container  } from "./styles"
import { api } from "../../services/api"
import { Context } from "../../contexts/Context"
import UserCard from "../../components/UserCard"

type ListType = {
    name: string;
    email: string;
    avatar?: string
}

function Users(){

    const {state, dispatch} = useContext(Context)
    const [list,setList] = useState<ListType[]>([])
    
    const getAllUsers = async () => {
        const res = await api.allUsers(state.user.token)
        setList(res.list)
    }

    useEffect(()=>{
        getAllUsers()
    },[])
   
    return (
        <Container>
            {
                list.map((item,index)=>(
                    <UserCard key={index} data={item} />
                ))
            }
        </Container>
    )
}

export default Users