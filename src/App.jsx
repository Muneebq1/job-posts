import './App.css';
import axios from 'axios';
import {  useEffect, useState } from 'react';
import { GET_JOB_IDS_URL, GET_JOB_URL, GET_MORE_DATA, getCols} from './utils/constants';
import Card from './component/Card';

let jobs = [];

function App() {
  const [jobCards, setJobCards] = useState([])
  const [count, setCount] = useState(9)

  useEffect(() => {
    axios.get(GET_JOB_IDS_URL)
      .then(response => {
        getJobIds(response.data)
      })
      .catch(err => {
        console.log("error", err)
      })
  }, [])

  const getJobIds = (idsArray) => {
    const promises = []
    for (let i = 0; i < idsArray.length; i++) {
      const ids = idsArray[i];
      promises.push(axios.get(`${GET_JOB_URL}${ids}.json`))
    }
    Promise.all(promises).then(
      (response) => {
        jobs = response.map((d, i) => {
          return d.data
        })
        loadMore()
      })
  }

  const loadMore = () => {
    setCount(count + 6)
    setJobCards(jobs.slice(0, count))
  }

  const cards = jobCards.map((d, i) => {

    const lowercaseDescription = d.title.toLowerCase();
    let name = "";
    let description = "";

    const isHiringString = lowercaseDescription.indexOf('is hiring');
    const hiringString = lowercaseDescription.indexOf('hiring');

    if (isHiringString >= 0) {
      name = lowercaseDescription.substr(0, isHiringString);
      description = lowercaseDescription.substr(isHiringString)
    } else if (hiringString >= 0) {
      name = lowercaseDescription.substr(0, hiringString);
      description = lowercaseDescription.substr(hiringString)
    } else {
      const subStrIndex = lowercaseDescription.indexOf(',')
      name = lowercaseDescription.substr(0, subStrIndex)
      description = lowercaseDescription.substr(subStrIndex + 1)
    }
console.log('time >>>>>>>',d.time)
    return (
      <div className="cards">
        {getCols(name, description , d.url, d.time, i , Card ,d.id)}
      </div>)
  })
  return (
    <div className='div-container'>
      <h1 className='heading'>HN Jobs</h1>
      <span >{cards}</span>
      <div className='row'>
      </div>
      <button type="button" onClick={loadMore}>load more</button>
    </div>
  )
}

export default App;
