import { useEffect, useState } from "react";
import { getProducts } from "./ProductApi";


export function useProducts(){
    const [products,setproducts] = useState([]);
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState("");

    useEffect(()=>{
        const fetchdata = async ()=>{
            try{
                setloading(true);
                const prod = await getProducts();
                setproducts(prod);
            }catch(err){
                seterror("Failed to fetch products");
            }finally{
                setloading(false);
            }
        }
        fetchdata();
    },[])

    return {products,loading,error};
}