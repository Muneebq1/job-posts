import "./app.css";
import moment from "moment/moment";
function card(props) {
  // console.log(props.url)
  return (
    <div className="card" onClick={props.onclick}>
      <h2>{props.name}</h2>
      <h5> {props.title}</h5>
      {/* {props.url} */}
      {/* <p>{moment(props.time).calendar() }</p> */}
      <p>{new Date(props.time).toLocaleDateString() }</p>
      

    </div>
    
  )
}
export default card