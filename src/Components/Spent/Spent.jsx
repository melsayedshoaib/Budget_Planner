import React from 'react'
import { useSelector } from 'react-redux'

export default function Spent() {
  const budget = useSelector((state) => state.budgetSlice.spentBudget)
  return (
    <div className="bg-orange-100 border-none text-2xl rounded-lg shadow-xl text-orange-700 px-4 py-3" role='alert'>
      <span>Spent: { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(budget)}</span>
    </div>
  )
}
