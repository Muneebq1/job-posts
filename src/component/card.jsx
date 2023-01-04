import "./app.css";
function card(props) {
  return (
    <div className="card">
      <h4>{props.name}</h4>
      <p> {props.title}</p>
    </div>
    
  )
}
export default card