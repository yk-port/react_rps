import React from 'react'

const JyankenBox = props => {
  const actionPon = i => {
    props.pon(i)
  }

  return (
    <div>
      <button onClick={() => actionPon(0)}>グー</button>
      <button onClick={() => actionPon(1)}>チョキ</button>
      <button onClick={() => actionPon(2)}>パー</button>
    </div>
  )
}

export default JyankenBox
