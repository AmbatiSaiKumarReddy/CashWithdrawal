// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  deductDenomination = amount => {
    const {balance} = this.state
    const updatedBalance = balance - amount
    this.setState({balance: updatedBalance})
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sai Kumar'
    const initial = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <h1 className="initial">{initial}</h1>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>

            <p className="balance">
              {balance}
              <br />
              <span className="sub-heading">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                id={each.id}
                value={each.value}
                deductDenomination={this.deductDenomination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
