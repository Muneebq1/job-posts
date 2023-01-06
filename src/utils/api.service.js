import { GET_JOB_URL } from "./constants";
import axios from 'axios';

const getJobIds = (idsArray) => {
    const promises = []
    for (let i = 0; i < idsArray.length; i++) {
        const ids = idsArray[i];
        promises.push(axios.get(`${GET_JOB_URL}${ids}.json`))
    }
    return Promise.all(promises)
        .then((response) => {
            return response.map((d, i) => {
                return d.data
            })
        })
    
}

export { getJobIds }