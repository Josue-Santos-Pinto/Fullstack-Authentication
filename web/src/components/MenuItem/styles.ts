import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

type MenuItemProps = {
    active: boolean
} 

export const Container = styled.a<MenuItemProps>`
    width: 80px;
    height: 80px;
    display: flex;
    background-color: ${props=>props.active ? 'rgba(0,0,0,0.2)' : 'transparent'};
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
`

export const Button = styled.button`
    width: 80px;
    height: 80px;
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
`

export const MenuText = styled.div`
    font-size: 20px;
    color: #fff;
    margin-right: 15px;
    transition: .5s;
`