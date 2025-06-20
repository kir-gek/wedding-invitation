import axios from 'axios';

// Создаем экземпляр Axios
const $Host = axios.create({
    // withCredentials: true,
    headers: {
        'Content-Type': 'text/plain' // Важно для GAS
    },
    baseURL: "https://script.google.com/macros/s/AKfycbwMsZrKjcEsBY0xEIrcEuzesHBv-K6RiOXJzzFGHz3FngwRBrGdSjqHlcU8l2uSzkWP/exec"
});










export const createZapis = async (
    name: string,
    going: string,
    food: string,
    alcohol: string,
    comment: string
) => {

    const payload = JSON.stringify({ name, going, food, alcohol, comment });

    const { data } = await $Host.post('', payload);
    // const { data } = await $Host.post('', { name, going, food, alcohol, comment })
    return data
}



export { $Host }