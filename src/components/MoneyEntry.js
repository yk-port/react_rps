import React, {Component} from 'react'

class MoneyEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paying: '',
      date: '',
      item: '',
      amount: ''
    }
  }

  onClickPaying(paying) {
    this.setState({ paying })
  }

  onChangeVale(e) {
    this.setState({ [ e.target.id ]: e.target.value })
  }

  onClickSubmit() {
    this.props.add(this.state)
    this.setState({ paying: '', date: '', item: '', amount: '' })
  }

  render() {
    return (
      <div className="entry">
        <fieldset>
          <legend>記帳</legend>
          <div>
            <input type="radio" id="receive" name="contact" value="receive" onClick={e => this.onClickPaying(e.target.value)} />
            <label htmlFor="receive">入金</label>
            <input type="radio" id="pay" name="contact" value="payment" onClick={e => this.onClickPaying(e.target.value)} />
            <label htmlFor="pay">出金</label>
          </div>
          <div>
            <label htmlFor="date">日付：</label>
            <input type="text" id="date" value={this.state.date} onChange={e => this.onChangeVale(e)} placeholder="3/15" />
          </div>
          <div>
            <label htmlFor="item">項目：</label>
            <input type="text" id="item" value={this.state.item} onChange={e => this.onChangeVale(e)} placeholder="小遣い" />
          </div>
          <div>
            <label htmlFor="amount">金額：</label>
            <input type="text" id="amount" value={this.state.amount} onChange={e => this.onChangeVale(e)} placeholder="2000" />
          </div>
          <div>
            <input type="submit" value="追加" onClick={() => this.onClickSubmit()} />
          </div>
        </fieldset>
      </div>
    )
  }
}

export default MoneyEntry
