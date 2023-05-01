import React from 'react'
import { useSelector } from 'react-redux'

export default function Budget() {
  const budget = useSelector((state) => state.budgetSlice.totalBudget)
  return (
      <div className="bg-blue-100 border-none text-2xl rounded-lg shadow-xl text-blue-700 px-4 py-3" role='alert'>
      <span>Budget: { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(budget)}</span>
    </div>
  )
}
