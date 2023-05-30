import axios from "axios";

const api=axios.create({
    baseURL:process.env.API_BASE_URL,
    headers:{
        Authorization:`Bearer ${process.env.BACKEND_API_KEY}`,
        'Content-Type':'application/json'
    },
});

//Categories
export const fetchCategories=async()=> api.get('/api/categories?populate=*')