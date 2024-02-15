import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useFetch = () => {
    const navigate = useNavigate()
    const [data, setData] = useState()


    const fetchCall = (options) =>{
        fetch(data,options)
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    setData(response)
                    // navigate('/dashboard');
                })        
    }


    useEffect(() => {
        if (data) {
            const { method, url } = data;
            switch (method) {
                case "POST":
                    fetchCall(url,{method:"POST"})
                    break;
                case "PUT":
                    fetchCall(url,{method:"PUT"})
                    break;
                case "DELETE":
                    fetchCall(url,{method:"DELETE"})
                    break;
                default:
                    fetchCall(url,{method:"GET"})
            }
            
        }
    }, [data]);

    return [data, setData];


}

export default useFetch;

