import "../App.css";
import { GET_MORE_DATA } from '../utils/constants';

function Card(props) {

  const getMoreInfo = () => {
    if (props.url) {
      window.open(props.url)
    } else {
      window.open(`${GET_MORE_DATA}${props.id}`)
    }
  }

  return (
    <div onClick={getMoreInfo}>
      <h2>{props.name}</h2>
      <div>{props.description}</div>
      <div className='time'>{new Date(props.time).toLocaleDateString()}</div>
    </div>
  )
}
export default Card