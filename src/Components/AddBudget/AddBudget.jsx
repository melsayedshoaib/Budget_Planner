import { Toaster, toast } from 'react-hot-toast';

import React from 'react'
import { addBudget } from '../../Store/Slices/budgetSlice';
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export default function AddBudget() {
    const [budgeValue, setBudgetValue] = useState("");
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addBudget(budgeValue))
        setBudgetValue("");
        toast.success("Budget has been added successfully!")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center justify-center">
                <input type="text" className='rounded-lg py-2 ps-1 w-1/2' placeholder='Enter Your Budget' value={budgeValue} onChange={(e) => setBudgetValue(e.target.value)} required />
                <button className='ms-3 bg-blue-950 text-white p-2 rounded-lg'>Add Budget</button>
            </form>
            <Toaster/>
        </div>
    )
}
