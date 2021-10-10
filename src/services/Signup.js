import axios from 'axios'
const baseUrl = '/users'

const addUser = async (user) => {
    try {
        await axios.post(baseUrl, user);
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const getUsers = async () => {
    try {
        const resp = await axios.get("/users");
        return resp.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}


export default { addUser, getUsers }