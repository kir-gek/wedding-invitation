import axios from 'axios';

// Создаем экземпляр Axios
const $product_components_Host = axios.create({
    // withCredentials: true,
    baseURL:"/api",  //это прокси из vite.config
});



export { $product_components_Host }