import axios from 'axios'
import urls from './globals';

const getAll = async () => {
    try {
        const request = await axios.get(urls.users);
        return request.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const getByPhone = async (phone) => {
    try {
        const request = await axios.get(urls.users + "/" + phone);
        return request.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}

export default { getByPhone, getAll }