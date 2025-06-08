import axios from 'axios';

// Создаем экземпляр Axios
const $Host = axios.create({
    // withCredentials: true,
    headers: {
        'Content-Type': 'text/plain' // Важно для GAS
    },
    baseURL: "https://script.google.com/macros/s/AKfycbyq4O8lpSOqN7L8nzvqEs4PdmB4pBrALzMuyFWNjls8_XmN4FG_na5fxFXfLLlE8zs5/exec"
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