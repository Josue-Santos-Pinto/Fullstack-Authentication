import axios from "axios";
import qs from 'qs'
const baseURL = 'http://192.168.1.100:3000'



export const api = {
    register: async (name: string, email: string,password: string) => {
        try {
            const config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
        
            const data = {
              name,
              email,
              password
            };
        
            const response = await axios.post(`${baseURL}/register`, qs.stringify(data), config);
            return response.data // A resposta da API
          } catch (error) {
            console.error(error);
          }
    },
    login: async (email: string,password: string) => {
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
            return response.data // A resposta da API
          } catch (error) {
            console.error(error);
          }
    },
    userInfo: async (id: number, token: string) => {
      try {
          const response = await axios.get(`${baseURL}/user/${id}`, 
          {
            headers: {
            'Authorization': `Bearer ${token}`
          }
        });
          return response.data // A resposta da API
        } catch (error) {
          console.error(error);
        }
  },
  changeUserInfo: async (id: number, token: string, name: string, avatar: string) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      const data = {
        name,
        avatar
      };
  
      const response = await axios.post(`${baseURL}/user/${id}`, qs.stringify(data), config);
      return response.data // A resposta da API
    } catch (error) {
      console.error(error);
    }
},
  allUsers: async ( token: string) => {
    try {
        const response = await axios.get(`${baseURL}/list`, 
        {
          headers: {
          'Authorization': `Bearer ${token}`
        }
      });
        console.log(response.data)
        return response.data // A resposta da API
      } catch (error) {
        console.error(error);
      }
},
}