import axios from 'axios'

const getAllStricts = async () => {
    const resp = await axios.get("/strict");
    const allStricts = resp.data;
    return allStricts;
}


const getAllStrictDay = async () => {
    const resp = await axios.get("/strictDay");
    const allStricts = resp.data;
    return allStricts;
}


export default { getAllStricts, getAllStrictDay }