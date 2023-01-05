import "../App.css";
function Card(props) {
  return (
    <div onClick={props.onclick}>
      <h2>{props.name}</h2>
      <div>{props.description}</div>
      <div className='time'>{new Date(props.time).toLocaleDateString()}</div>
    </div>
  )
}
export default Card