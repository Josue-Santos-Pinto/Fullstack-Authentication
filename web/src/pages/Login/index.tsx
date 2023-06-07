/* eslint-disable prefer-const */
import { useState, useContext } from 'react'
import { Context } from '../../contexts/Context'
import {
    BgBody,
    Container,
    FormArea,
    HeaderForm, 
    LogoArea, 
    Logo,
    NewUserArea, 
    NewUserText,
    NewUserButton,
    MainFormArea,
    MainFormTitle,
    MainFormSubTitle,
    MainForm,
    InputArea,
    InputValue,
    Label,
    SubmitButton,
    ImageArea, 
    Image,
    ErrorSpan
} from './styles'
import houseIMG from '../../assets/bg/house.jpg'
import logo from '../../assets/logo.png'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver} from '@hookform/resolvers/zod'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'



const createUserFormSchema = z.object({
    email: 
        z.string()
        .nonempty('O email é obrigatório')
        .email('Formato de e-mail inválido')
        .endsWith('gmail.com','Insisira sua conta gmail')
        .toLowerCase(),
    password: 
        z.string()
        .min(6,'A senha precisa ter no minimo 6 caracteres')
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

function Login (){

    const { state, dispatch } = useContext(Context)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

    

    async function createUser(data: CreateUserFormData ){
        const res = await api.login(data.email,data.password)
        if(!res.error){
            if(res.token){
                dispatch({
                    type: "SET_TOKEN",
                    payload: { token: res.token }
                })
                navigate('/users')   
            }
        } else {
            alert(res.error)
        }
    }

    return (
        <BgBody>
        <Container>
            <FormArea>
                <HeaderForm>
                    <LogoArea>
                        <Logo src={logo}/>
                    </LogoArea>
                    <NewUserArea>
                        <NewUserText>Não possui uma conta?</NewUserText>
                        <NewUserButton to='/register'>Criar Conta</NewUserButton>
                    </NewUserArea>
                </HeaderForm>
                <MainFormArea>
                    <MainFormTitle>Bem vindo</MainFormTitle>
                    <MainFormSubTitle>Faça login para acessar nosso site</MainFormSubTitle>
                    <MainForm onSubmit={handleSubmit(createUser)} action='' method='post'>
                        <InputArea hasError={errors.email?.message ? true : false}>
                            <InputValue 
                                type='text' 
                                {...register('email')} 
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)}  
                                 
                            />
                            <Label shrink={email !== ''}>Email</Label>
                        </InputArea>
                        {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}

                        <InputArea hasError={errors.password?.message ? true : false}>
                            <InputValue 
                                type='password' 
                                {...register('password')}  
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)}
                                 
                            />
                            <Label shrink={password !== ''}>Senha</Label>
                        </InputArea>
                        {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
                            
                        <SubmitButton type='submit'>Login</SubmitButton>
                    </MainForm>
                </MainFormArea>
            </FormArea>
            <ImageArea>
                <Image src={houseIMG}  />
            </ImageArea>
        </Container>
        </BgBody>
    )
}


export default Login