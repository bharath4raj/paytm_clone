import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { client } from "../axiosConfig";


const ProductDetailsPage = () =>{

    const [data, setData] = useState([])
    const params = useParams();
    useEffect(() =>{
        const {id} = params;
        client.get(`/products/${id}`)
            .then((response) => {
                console.log('Response :', response.data.products)
                setData(response.data.products)
            }).catch((err) => {
                console.log(err)
            })
    },[])

    console.log(params)
    return <h2>Product</h2>
    
}

export default ProductDetailsPage;