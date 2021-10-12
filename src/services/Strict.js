import axios from 'axios'
import urls from './globals';

const getAllStricts = async () => {
    try {
        const resp = await axios.get(urls.strict);
        const allStricts = resp.data;
        return allStricts;
    } catch (error) {
        throw new Error(error.response.data);
    }
}


const getAllStrictDay = async () => {
    try {
        const resp = await axios.get(urls.strictDay);
        const allStricts = resp.data;
        return allStricts;
    } catch (error) {
        throw new Error(error.response.data);
    }
}


export default { getAllStricts, getAllStrictDay }