import styled from "styled-components";


export const Container = styled.div`
    width: 300px;
    height: 250px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    overflow: hidden;
    margin: 20px 15px;

    @media (max-width: 800px) {
        width: 400px;
        height: 300px;
        margin: 20px auto;
    }

    @media (max-width: 600px) {
        width: 70%;
        height: 230px;
        margin: 20px auto;
        overflow: auto;
    }
`
export const TopCardArea = styled.div`
    width: 100%;
    height: 80px;
    background-color: #6f9d53;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TopCardPhotoArea = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 75px;
    margin-top: 65px;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
export const TopCardPhoto = styled.img`
    width: 100%;
    height: 100%;
    resize-mode: cover;
`
export const CardInfo = styled.div`
    display: flex;
    height: calc(250px - 80px);
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const UserName = styled.div`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;

    @media (max-width: 500px) {
       font-size: 18px;
    }
`
export const UserEmail = styled.div`
    @media (max-width: 500px) {
        font-size: 14px;
    }
`