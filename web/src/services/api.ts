import axios from "axios";
import qs from 'qs'
const baseURL = 'http://192.168.1.101:3000'



export const api = {
    register: async (email: string,password: string) => {
        console.log(email)
        try {
            const config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
        
            const data = {
              email,
              password
            };
        
            const response = await axios.post(`${baseURL}/register`, qs.stringify(data), config);
            console.log(response.data); // A resposta da API
          } catch (error) {
            console.error(error);
          }
    },
    login: async (email: string,password: string) => {
        console.log(email)
        try {
            const config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
        
            const data = {
              email,
              password
            };
        
            const response = await axios.post(`${baseURL}/login`, qs.stringify(data), config);
            console.log(response.data); // A resposta da API
          } catch (error) {
            console.error(error);
          }
    },
}