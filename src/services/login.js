import axios from 'axios'
import urls from './globals'

const login = async credentials => {
    try {
        const response = await axios.post(urls.login, credentials)
        return response.data
    } catch (error) {
        throw new Error(error.response.data);
    }
}

export default { login }