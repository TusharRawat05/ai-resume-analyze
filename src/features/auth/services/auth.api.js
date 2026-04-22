import axios from 'axios'


const api=axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://ai-resume-analyse-backend.onrender.com",
    withCredentials:true
})

export async function register({username,email,password}){
    try {
       const response = await api.post('/api/auth/register',{
        username,email,password
    })
       return response.data;
    } catch (error) {
        console.error(error)
        return null;
    }
}

export async function logIn({email,password}){
    try {
        const response=await api.post('/api/auth/login',{
            email,password
        }
    )
    return response.data

    } catch (error) {
        console.log(error)
    }
}

export async function logOut(){
    try {
        const response=await api.get('/api/auth/logout')
        return response.data
    } catch (error) {
        console.log(error)
        
    }
}

export async function getMe(){
    try {
        const response=await api.get('/api/auth/get-me')
        return response.data;
    } catch (error) {
        console.log(error)
    }
}