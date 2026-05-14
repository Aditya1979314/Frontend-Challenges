import { useProducts } from "../Features/Products/useProducts"


export default function Products(){
const{products,error,loading} = useProducts();

if(loading){
    return <div>Loading ...</div>
}

if(error){
   return <div>error</div>
}

if(products){
    return (
        <div className="ProductContainer">
            {products.map((product)=>(
                <div key={product.id}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                </div>
            ))}
        </div>
    )
}

}