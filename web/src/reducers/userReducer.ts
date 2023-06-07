import { reducerActionType } from '../types/reducerActionType'

export type UserType = {
    name: string;
    email: string;
    token: string;

}

export const userInitialState: UserType = {
    name: '',
    email: '',
    token: ''
}

export const userReducer = (state: UserType, action: reducerActionType) => {
    switch(action.type){
        case 'SET_NAME':
            return {...state, name: action.payload.name}
        case 'SET_EMAIL':
            return {...state, email: action.payload.email}
        case 'SET_TOKEN':
            return {...state, token: action.payload.token}
    }
    return state
}