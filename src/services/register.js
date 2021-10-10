import axios from 'axios'
const baseUrl = '/register'

const register = async (credentials) => {
    try {
        const response = await axios.post(baseUrl, credentials)
        return response.data
    } catch (error) {
        throw new Error(error.response.data);
    }
}

export default { register }