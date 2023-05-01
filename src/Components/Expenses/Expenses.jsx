import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { adjustRemainingOnAdding, adjustRemainingOnDeletion, adjustSpentOnAdding, adjustSpentOnDeletion } from '../../Store/Slices/budgetSlice';

import {AiFillCloseCircle} from 'react-icons/ai'
import { useDispatch } from 'react-redux';

export default function Expenses() {
    const dispatch = useDispatch();
    const [allExpenses, setAllExpenses] = useState([]);
    const [expenseName, setName] = useState("");
    const [expenseCost, setCost] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        setAllExpenses(prev => [...prev, { name: expenseName, cost: expenseCost, id: crypto.randomUUID() }])
        setName("")
        setCost("")
        toast.success("Expense has been Added Successfully!");
        dispatch(adjustRemainingOnAdding(expenseCost))
        dispatch(adjustSpentOnAdding(expenseCost))
    }
    function handleDeletion(id) {
        const expensesAfterDeletion = allExpenses.filter((item) => item.id !== id);
        setAllExpenses(expensesAfterDeletion)
        toast.success("Expense has been Deleted Successfully!");
    }
    return (
    <div className="ms-3">
        <h2 className='text-white md:ms-3 text-4xl mb-3'>Add Expense</h2>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-wrap'>
            <div className='w-full'>
                <label htmlFor='name' className='text-white md:ms-3 text-2xl block mb-3'>Name</label>
                <input type="text" className='md:ms-3 mb-3 py-3 w-3/4 rounded-md ps-1 focus:outline-slate-500' value={expenseName} id='name' onChange={((e) => setName(e.target.value))} required placeholder="Enter Expense Name" />
            </div>
            <div className='w-full'>
                <label htmlFor='cost' className='text-white md:ms-3 text-2xl block mb-3'>Cost</label>
                <input type="text" className='md:ms-3 py-3 mb-3 rounded-md w-3/4 ps-1 focus:outline-slate-500' id='cost' value={expenseCost}  required onChange={((e) => {setCost(e.target.value);})} placeholder="Enter Expense Cost" />
            </div>    
            </div>
            <button type='submit' className='md:ms-3 text-lg text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Add</button>
        </form>
            <h3 className='text-white md:ms-3 text-3xl mb-3'>Expenses</h3>
            <ul className='py-3'>
                {allExpenses.map((expense) => {
                return <li className="text-white flex justify-between bg-slate-900 w-11/12 mx-auto rounded-lg mb-1 p-2" key={expense.id}>
                        <div>
                            <h5 className='text-white text-4xl'>{expense.name}</h5>
                        </div>
                        <div className='flex items-center'>
                        <span className='me-3 text-2xl bg-slate-600 px-3 rounded-md'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(expense.cost)} </span>
                        <span className='text-2xl cursor-pointer' onClick={() => {
                            return <>
                                {handleDeletion(expense.id)}
                                {dispatch(adjustRemainingOnDeletion(Number(expense.cost)))}
                                {dispatch(adjustSpentOnDeletion(Number(expense.cost)))}
                            </>
                        }}>
                            <AiFillCloseCircle/>
                        </span>
                    </div>
                    </li>
                })}
            </ul>
            <Toaster/>
        </div>
    )
}
