// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, deductDenomination} = props

  const onClickDenomination = () => {
    deductDenomination(value)
  }

  return (
    <li className="denomination-item">
      <button className="btn" type="button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
