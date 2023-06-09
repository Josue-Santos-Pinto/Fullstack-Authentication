import { useContext, useEffect, useState } from "react"
import { ButtonsArea, ChangePhotoButton, Container, HeaderArea, Input, Label, Photo, PhotoArea, SaveButton, UserInfo, UserInfoArea  } from "./styles"
import { api } from "../../services/api"
import { Context } from "../../contexts/Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera, faUser } from "@fortawesome/free-solid-svg-icons"



function MyAccount(){

    const {state, dispatch} = useContext(Context)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState('')

    const getUserInfo = async () => {
        const res = await api.userInfo(state.user.id, state.user.token )
        setName(res.user.name)
        setEmail(res.user.email)
        setImg(res.user.avatar)
    }

    const handleChangeUserInfo = async () => {
        await api
    }

    useEffect(()=>{
        getUserInfo()
    },[])
    
   
    return (
        <Container>
            <HeaderArea>
                <PhotoArea>
                    {img != '' ? 
                        <Photo src={`http://192.168.1.100:3000/media/${img}`} />   
                    :
                        <FontAwesomeIcon icon={faUser} color="#CCC" size="7x" />            
                    }
                        <ChangePhotoButton>
                            <FontAwesomeIcon icon={faCamera} color="#000" size="2x" /> 
                        </ChangePhotoButton>
                </PhotoArea>
            </HeaderArea>
            <UserInfoArea>
                <UserInfo>
                    <Label>Nome: </Label>
                    <Input 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </UserInfo>
                <UserInfo>
                    <Label>Email: </Label>
                    <Input 
                        value={email}
                        disabled
                        style={{border: 'none'}}
                    />
                </UserInfo>

            <ButtonsArea>
                <SaveButton onClick={handleChangeUserInfo}>Salvar</SaveButton>
            </ButtonsArea>

            </UserInfoArea>

        </Container>
    )
}

export default MyAccount