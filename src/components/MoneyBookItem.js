import React from 'react'

const MoneyBookItem = props => {
  return (
    <>
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
    </>
  )
}

export default MoneyBookItem
