import React, { Component } from 'react'
import MoneyBookList from './MoneyBookList'
import MoneyEntry from './MoneyEntry'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [
        { date: '1/1', item: 'お年玉', amount: 10000 },
        { date: '1/3', item: 'ケーキ', amount: -500 },
        { date: '2/1', item: '小遣い', amount: 3000 },
        { date: '2/5', item: 'マンガ', amount: -600 }
      ]
    }
  }

  addBook({ paying, date, item, amount }) {
    let _state = Object.assign({}, this.state)
    let newBook = {
      date,
      item,
      amount: paying == "payment" ? -amount : amount
    }
    _state.books.push(newBook)
    this.setState(_state)
  }

  render() {
    return (
      <div>
        <h1>小遣い帳</h1>
        <MoneyBookList books={this.state.books} />
        <MoneyEntry
          add={data => this.addBook(data)} />
      </div>
    )
  }
}

export default App
