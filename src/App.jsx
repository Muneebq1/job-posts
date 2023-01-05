import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './component/card';
const Get_ids = `https://hacker-news.firebaseio.com/v0/jobstories.json`
const Get_data = `https://hacker-news.firebaseio.com/v0/item/`
let jobs = [];

function App() {
  const [id, setId] = useState([])
  const [count, setCount] = useState(9)

  useEffect(() => {
    axios.get(Get_ids)
      .then(response => {
        GetData(response.data)
      })
      .catch(err => {
        console.log("error", err)
      })
  }, [])

  const GetData = (idsArray) => {
    const promises = []
    for (let i = 0; i < idsArray.length; i++) {
      const ids = idsArray[i];
      promises.push(axios.get(`${Get_data}${ids}.json`))
    }
    Promise.all(promises).then(
      (response) => {
        jobs = response.map((d, i) => {
          return d.data
        })
        // setId(jobs.slice(0, count))
        loadMore()
      })
  }

  const loadMore = () => {
    setCount(count + 6)
    setId(jobs.slice(0, count))
  }

  const cards = id.map((d, i) => {

    const onclick = () => {
      if (d.url) {
        window.open(d.url)
      } else {
        window.open(`https://news.ycombinator.com/item?id=${d.id}`)
      }
    }
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

    const getCols = (d, i) => {
      if (((i + 1) % 3) === 1) {

        return (
          <div onClick={onclick}>
            <h2>{name}</h2>
            <div>{description}</div> 
            <div className='time'>{new Date(d.time).toLocaleDateString()}</div>
          </div>
        )
      } else if (((i + 1) % 3) === 2) {
       
        return (
          <div onClick={onclick}>
            <h2>{name}</h2>
            <div>{description}</div>
            <div className='time'>{new Date(d.time).toLocaleDateString()}</div>
          </div>
        )
      } else if (((i + 1) % 3) === 0) {

        return (
          <div onClick={onclick}>
            <h2>{name}</h2>
            <div>{description}</div>
            <div className='time'>{new Date(d.time).toLocaleDateString()}</div>
          </div>
        );
      }
    }


    return (
      <div className="cards">
        {getCols(d, i)}
      </div>)


    //   <Card
    //   name={name}
    //   title={description}
    //   time={d.time}
    //   onclick={onclick}


  })



  return (

    <div className='div-container'>
      <h1 className='heading'>HN Jobs</h1>
      <span onClick={onclick}>{cards}</span>
      <div className='row'>
      </div>
      <button type="button" onClick={loadMore}>load more</button>
    </div>

  )

}

export default App;
