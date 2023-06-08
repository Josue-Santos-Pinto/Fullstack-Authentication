import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'
type labelProps = {
    error?: boolean | null;
    shrink?: boolean
}

export const BgBody = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6f9d53;
`

export const Container = styled.div`
    width: 95vw;
    height: 95vh;
    display: flex;
    flex-direction : row;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
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
    width: 200px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.img`
    width: 100%;
    height: 100%;
    resize-mode: cover;
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
export const NewUserButton = styled(Link)`
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
    text-decoration: none;
`
export const MainFormArea = styled.div`
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
export const MainForm = styled.form`
    position: relative;
    width: 400px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const InputArea = styled.div<labelProps>`
    position: relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid ${props => props.error ? '#ff0000' : '#aec09e'};
`



export const InputValue = styled.input`
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;

    &:focus ~ label {
        top: -5px;
        font-size:14px;
        font-weight: bold;
        color: #81a06c;
    }
   
`
export const Label = styled.label<labelProps>`
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #000;
    font-size: 1em;
    pointer-events: none;
    transition: .5s;
   

    ${(props) =>
        props.shrink === true &&
        css`
            top:-5px;
            font-size:14px;
            font-weight: bold;
            color: #81a06c;
        `}
     
`

export const ErrorSpan = styled.span`
    color: #ff0000;
    font-size: 12px;
    margin-top: -25px;
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