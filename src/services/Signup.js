import axios from 'axios'
import urls from './globals';

const addUser = async (user) => {
    try {
        await axios.post(urls.users, user);
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const getUsers = async () => {
    try {
        const resp = await axios.get(urls.users);
        return resp.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}


export default { addUser, getUsers }