import React from 'react'
import { useSelector } from 'react-redux'

export default function Remaining() {
  const budget = useSelector((state) => state.budgetSlice.remainingBudget)
  return (
    <div className="bg-teal-100 border-none text-2xl rounded-lg shadow-xl text-teal-700 px-4 py-3" role='alert'>
      <span>Remaining: { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(budget)}</span>
    </div>
  )
}
