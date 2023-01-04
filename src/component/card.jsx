import "./app.css";
function card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.title}</p>
    </div>
    
  )
}
export default card