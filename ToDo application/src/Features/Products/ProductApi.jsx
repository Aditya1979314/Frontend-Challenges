import axios from "axios"

const API = axios.create({
    baseURL:"https://localhost:3000"
});

export const getProducts = async ()=>{
    try{
    const response = await axios.get('/products');
    return response.data;
    }catch(err){
        console.log("Some error occured");
        throw err;
    }
}