import React from 'react'

const ScoreBox = ({ playerHnad, computerHand }) => {
  const rps = ['グー', 'チョキ', 'パー']
  const result = ['引き分け', '勝ち', '負け']

  const judge = (playerHnad, computerHand) => {
    if (playerHnad === null || computerHand === null) {
      return null
    } else {
      return result[(computerHand - playerHnad + 3) % 3]
    }
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>あなた</td>
          <td>{rps[playerHnad]}</td>
        </tr>
        <tr>
          <td>相手</td>
          <td>{rps[computerHand]}</td>
        </tr>
        <tr>
          <td>勝敗は…</td>
          <td>{judge(playerHnad, computerHand)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ScoreBox
