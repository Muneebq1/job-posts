import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './component/card';
const Get_ids = `https://hacker-news.firebaseio.com/v0/jobstories.json`
const Get_data = `https://hacker-news.firebaseio.com/v0/item/`

function App() {

  const [id, setId] = useState([])

  useEffect(() => {
    axios.get(Get_ids)
      .then(response => {
        // console.log(response.data)
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

        const jobs = response.map((d, i) => {
          return d.data
        })
        // console.log(jobs)
        setId(jobs)
        // return jobs
      })
  }
  // console.log(id)


  const cards = id.map((d, i) => {
    const hire = 
    // d.title.toLowerCase();
    d.title.split(" ")
    const index = hire.indexOf('is')
console.log(index)
    return (<Card
      name={d.by}
      title={hire[index]}
    // title ={d.title}
    />)

  })


  const load = () => {

  }

  return <div onSubmit={load}>
    <h1 className='heading'>HN Jobs</h1>
    <span className='flex'>{cards}</span>
    <button type="submit">load more</button>
  </div>










  // const [id, setId] = useState({ jobs: [] })

  // let function1 = () => {
  //   axios.get(`https://hacker-news.firebaseio.com/v0/jobstories`)
  //     .then(response => response.json())
  //     .then(data => {
  //       const jobs = data.results

  // Promise.all(jobs.map(jobs => axios.get(`https://hacker-news.firebaseio.com/v0/item/${jobs.id}`)))



  //         .then(resp => Promise.all( resp.map(r => r.json()) ))
  //         .then(result => {
  //           const jobs = result.map((data, i) => {
  //             const job = Object.assign(jobs[i], {
  //               genres: data.genres,
  //               homepage: data.homepage
  //             });
  //             return job;
  //           });
  //           this.setId({
  //             jobs
  //           });
  //         });
  //     })
  // }
  // function1()

  // const jobs = this.id.jobs.map(job =>{
  //   return(job.genres)
  // })


  // let id = []
  // function func1() {
  //   return new Promise((resolve, reject) => {
  //     axios.get(`https://hacker-news.firebaseio.com/v0/jobstories.json`)
  //     .then(response => {
  //         id.push(response.data)
  //         resolve();
  //       })
  //       .catch(err => {
  //         console.log("error", err)
  //         reject()
  //       })
  //   })
  // }
  // func1().then(function(){
  //   console.log("done")
  // }).catch(function(){
  //   console.log("fail")
  // }) 






  // for (let i = 0; i < id.length; i++) {

  // console.log(id.length)s
  // {i < id.length ? <Card/> :null}

  // }


  //   let cards;
  //   cards = id.map((d, i) => {

  //   })
  // console.log(cards)

  // return <div>{ }</div>

  // let cards;
  // cards = id.map((d, i) => {

  //     return (<Card />)

  // })
  // console.log("i", cards)


  //  axios.get(`https://hacker-news.firebaseio.com/v0/item/.json`)
  // .then(response => {
  //   console.log(response.data)
  // })
  // .catch(err => {
  //   console.log("error", err)
  // })





}

export default App;
