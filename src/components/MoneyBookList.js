import React from 'react'

const MoneyBookItem = props => {
  return (
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
        {
          props.books.map(({ date, item, amount }, index) => (
            <tr key={index}>
              <td>{date}</td>
              <td>{item}</td>
              <td>{ amount >= 0 ? amount : null }</td>
              <td>{ amount < 0 ? amount : null }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default MoneyBookItem
