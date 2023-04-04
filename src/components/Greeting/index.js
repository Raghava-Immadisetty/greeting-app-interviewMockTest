import './index.css'

const Greeting = props => {
  const {item, result, isActive} = props
  const {buttonText, id} = item

  const activeBtn = isActive ? 'active-btn' : ''

  const onGetting = () => {
    result(id)
  }

  return (
    <li className="list-btn">
      <button type="button" onClick={onGetting} className={`btn ${activeBtn}`}>
        {buttonText}
      </button>
    </li>
  )
}

export default Greeting
