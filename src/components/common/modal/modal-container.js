import ModalComponent from "./modal-component";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/fetch";



const ModalContainer = (props) => {
    const navigate = useNavigate();
    const [apiCall,setAPICall] = useFetch(null);


    const login = useGoogleLogin({
        onSuccess: response => {
            console.log(response);
            localStorage.setItem('oauth_token',response.code)
            navigate('/dashboard');
        },
        onError: response => {
            console.log(response);
        },
        flow: 'auth-code'
    });

    const fetchLogin = () => {    
        
        setAPICall("https://dummyjson.com/products/1");
        console.log('apiCall',apiCall)
        
    }

    const getData = () => {
        setAPICall({
            url:"https://dummyjson.com/products/1",
            method:"GET"
        });
    }

    return (
        <ModalComponent {...props} l
        login={login} 
        fetchLogin={fetchLogin}
        // getData={getData}
        />
    );
}

export default ModalContainer;