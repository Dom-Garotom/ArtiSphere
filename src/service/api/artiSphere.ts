import axios from 'axios';

const artiSphereApi = axios.create({
    baseURL: "https://artisphere-api.onrender.com",
    timeout: 100000 ,
    headers : {
        'Content-Type': 'application/json',
    }
})


export default artiSphereApi;