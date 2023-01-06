import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { GET_JOB_IDS_URL, getCols, getDescription } from './utils/constants';
import { getJobIds } from './utils/api.service';
import Card from './component/Card';

let jobs = [];

function App() {
  const [jobCards, setJobCards] = useState([])
  const [count, setCount] = useState(9)

  useEffect(() => {
    axios.get(GET_JOB_IDS_URL)
      .then(response => {
        getJobIds(response.data)
          .then((d) => {
            jobs = d
            loadMore()
          })
      })
      .catch(err => {
        console.log("error", err)
      })
  }, [])


  const loadMore = () => {
    setCount(count + 6)
    setJobCards(jobs.slice(0, count))
  }

  const cards = jobCards.map((d, i) => {
    const jobs = getDescription(d.title)
    return (
      <div className="cards">
        {getCols(jobs.name, jobs.description, d.url, d.time, i, Card, d.id)}
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
