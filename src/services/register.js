import axios from 'axios'
import urls from './globals'

const register = async (credentials) => {
    try {
        const response = await axios.post(urls.register, credentials)
        return response.data
    } catch (error) {
        throw new Error(error.response.data);
    }
}

export default { register }