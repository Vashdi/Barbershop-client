import axios from 'axios'

const getAllStricts = async () => {
    const resp = await axios.get("/strict");
    const allStricts = resp.data;
    return allStricts;
}

const strictToDate = (date) => {
    const arrOfYearMonthDay = date.split("-");
    const year = arrOfYearMonthDay[0];
    const month = arrOfYearMonthDay[1];
    const day = arrOfYearMonthDay[2].split("T")[0];
    const newDate = new Date()
}


export default { getAllStricts, }