import styled from "styled-components";

type labelProps = {
    hasError?: boolean | null
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction : row;
    justify-content: center;
`
export const FormArea = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
export const HeaderForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    height: 150px;
    width: 100%;
`
export const LogoArea = styled.div`
    width: 150px;
    height: 80px;
    background-color: blue;
`
export const Logo = styled.img`
    
`
export const NewUserArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 100%;
`

export const NewUserText = styled.h2`
    font-size: 15px;
    color: #aaacab;
    font-weight: 600;
`
export const NewUserButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #aaacab;
    color: #7da167;
    font-weight: 700;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    padding: 0 10px;
    margin-left: 10px;
`
export const MainForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const MainFormTitle = styled.div`
    font-size: 50px;
    font-weight: 800;
    margin-top: 55px;
`
export const MainFormSubTitle = styled.h1`
    font-size: 15px;
    font-weight: 600;
    color: #aaacab;
    line-height: 5px;
`
export const InputArea = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Label = styled.label`
    font-size: 20px;

`

export const InputValue = styled.input<labelProps>`
    padding: 10px;
    width: 300px;
    border: 1px solid ${props => props.hasError ? 'red': 'green'};
    margin-top: 10px;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`
export const ErrorSpan = styled.span`
    color: #ff0000;
    font-size: 12px;
`

export const SubmitButton = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    margin-top: 30px;
    background-color: #528a2e;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: #5c913a;
    }
`

export const ImageArea = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const Image = styled.img`
    width: 95%;
    height: 95%;
    max-height: 900px;
    margin: 15px;
    resize-mode: cover;
    border-radius: 10px;
`

export const Texto = styled.h1`
    font-size: 30px;
    color: black;
`