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
    MainForm,
    MainFormTitle,
    MainFormSubTitle,
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
                <MainForm>
                    <MainFormTitle>Bem vindo</MainFormTitle>
                    <MainFormSubTitle>Faça login para acessar nosso site</MainFormSubTitle>
                    <form onSubmit={handleSubmit(createUser)}>
                    <InputArea>
                        <Label>Email</Label>
                        <InputValue type='text' {...register('email')} placeholder='exemplo@gmail.com' hasError={errors.email?.message ? true : false} />
                        {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
                    </InputArea>

                    <InputArea>
                        <Label>Senha</Label>
                        <InputValue type='password' {...register('password')} placeholder='password123' hasError={errors.password?.message ? true : false} />
                        {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
                    </InputArea>
                        
                    <SubmitButton type='submit'>Login</SubmitButton>
                    </form>
                    <pre>{output}</pre>
                </MainForm>
            </FormArea>
            <ImageArea>
                <Image src={houseIMG}  />
            </ImageArea>
        </Container>
    )
}


export default Authenticate