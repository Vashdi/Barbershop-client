import axios from 'axios'

const getAllStricts = async () => {
    try {
        const resp = await axios.get("/strict");
        const allStricts = resp.data;
        return allStricts;
    } catch (error) {
        throw new Error(error.response.data);
    }
}


const getAllStrictDay = async () => {
    try {
        const resp = await axios.get("/strictDay");
        const allStricts = resp.data;
        return allStricts;
    } catch (error) {
        throw new Error(error.response.data);
    }
}


export default { getAllStricts, getAllStrictDay }