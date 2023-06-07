import { useContext } from "react"
import { Box, Container } from "./styles"
import { Context } from "../../contexts/Context"


function Home(){
    const { state, dispatch } = useContext(Context);
    
    return (
        <Container>
            
            Texto: {state.user.token}
        </Container>
    )
}

export default Home