import { useState } from 'react'
import {
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
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver} from '@hookform/resolvers/zod'




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

function Authenticate (){

    const[output, setOutput] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

    function createUser(data: any){
        setOutput(JSON.stringify(data, null, 2))
    }

    return (
        <Container>
            <FormArea>
                <HeaderForm>
                    <LogoArea>
                        <Logo />
                    </LogoArea>
                    <NewUserArea>
                        <NewUserText>Não possui uma conta?</NewUserText>
                        <NewUserButton>Criar Conta</NewUserButton>
                    </NewUserArea>
                </HeaderForm>
                <MainFormArea>
                    <MainFormTitle>Bem vindo</MainFormTitle>
                    <MainFormSubTitle>Faça login para acessar nosso site</MainFormSubTitle>
                    <MainForm onSubmit={handleSubmit(createUser)} action=''>
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
                    <pre>{output}</pre>
                </MainFormArea>
            </FormArea>
            <ImageArea>
                <Image src={houseIMG}  />
            </ImageArea>
        </Container>
    )
}


export default Authenticate