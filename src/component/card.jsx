import "../App.css";
// import moment from "moment/moment";
function card(props) {
  return (
    <div className="card" onClick={props.onclick}>
      <h2 className="col-2">{props.name}</h2>
      <h5 className="col-2"> {props.title}</h5>
      {/* <p>{moment(props.time).calendar() }</p> */}
      <p className="col-2">{new Date(props.time).toLocaleDateString() }</p>
    </div>
    
  )
}
export default card