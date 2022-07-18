import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Transaction({ transaction }) {
const { deleteTransaction } = useContext(GlobalContext)

let StoredTransactions = []

StoredTransactions.push(transaction)
localStorage.setItem("TRANSACTIONS",JSON.stringify(StoredTransactions))

const sign = transaction.amount < 0 ? '-': '+'
  return (
    <li className={transaction.amount < 0 ? "minus": "plus"}>
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
    <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
  </li>
  )
}
