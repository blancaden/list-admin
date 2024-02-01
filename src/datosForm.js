import axios from "axios";
import { json } from "react-router-dom";

const apiClient = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept:'application/json',
        'Content-Type': 'application/json'
    }
})

export default apiClient;

// export const DatosForm ={

// }