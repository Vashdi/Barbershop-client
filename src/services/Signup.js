import axios from 'axios'
const baseUrl = '/users'

const addUser = async (user) =>
{
    await axios.post(baseUrl, user);
}

const getUsers = async() =>
{
    const resp = await axios.get("/users");
    return resp.data;
}

  
  export default { addUser, getUsers }