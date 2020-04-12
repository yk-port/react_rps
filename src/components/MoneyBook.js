import React from 'react'
import MoneyBookItem from './MoneyBookItem'

const MoneyBook = () => {
  const books = [
    { date: '1/1', item: 'お年玉', amount: 10000 },
    { date: '1/3', item: 'ケーキ', amount: -500 },
    { date: '2/1', item: '小遣い', amount: 3000 },
    { date: '2/5', item: 'マンガ', amount: -600 }
  ]

  return (
    <div>
      <h1>小遣い帳</h1>
      <table className="book">
        <thead>
          <tr>
            <th>日付</th>
            <th>項目</th>
            <th>入金</th>
            <th>出金</th>
          </tr>
        </thead>
        <tbody>
          <MoneyBookItem books={books} />
        </tbody>
      </table>
    </div>
  )
}

export default MoneyBook
