import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export const HeaderArea = styled.div`
    height: 300px;
    width: 100%;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PhotoArea = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 200px;
    border: 2px solid black;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    position: relative;

    @media (max-width: 600px) {
        width: 300px;
        height: 300px;
    }
`
export const Photo = styled.img`
    width: 100%;
    height: 100%;
    resize-mode: cover;
    border-radius: 200px;
`
export const ChangePhotoButton = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    right: 30px;
    border: 1px solid #000;
    cursor: pointer;
    z-index: 99;
`

export const UserInfoArea = styled.div`
    display: flex;
    height: calc(100vh - 300px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
`
export const Label = styled.div`
    font-size: 20px;
    margin-right: 20px;
    color: #000;
    font-weight: bold;
`
export const Input = styled.input`
    padding: 10px;
    border: 1px solid green;
    border-radius: 10px;
    outline: none;
`

export const ButtonsArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
export const SaveButton = styled.div`
    width: 100px;
    height: 40px;
    border: 1px solid #6f9d53;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s;

    &:hover {
        background-color: #6f9d53;
    }
`


