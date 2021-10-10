import axios from 'axios'
const baseUrl = '/users'

const getAll = async () => {
    try {
        const request = await axios.get(baseUrl);
        return request.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const getByPhone = async (phone) => {
    try {
        const request = await axios.get(baseUrl + "/" + phone);
        return request.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}

export default { getByPhone, getAll }