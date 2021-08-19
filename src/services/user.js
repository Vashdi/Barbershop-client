import axios from 'axios'
const baseUrl =  '/users'

const getAll = async () =>
{
    const request = await axios.get(baseUrl);
    return request.data;
}

const getByPhone = async (phone) =>
{
    const request = await axios.get(baseUrl + "/" + phone);
    return request.data;
}

export default {getByPhone , getAll}