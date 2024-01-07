import React, { useState } from 'react'

const Hooks = (props) => {

    const[number , setNumber] = useState(0)
    
    const incrementvalue = () => {
        setNumber(number + 1)
    }
    const decrementvalue = () => {
        if(number > 0){
            setNumber(number-1)
        }
        
    }
    const resetvalue = () => {
        setNumber(0)
    }

    

  return (
    <>
    <div className='mx-auto text-center py-[90px]'>
        <h1 className='font-bold text-[50px] '>Use state</h1>
        <h1 className='text-[80px]'>{number}</h1>
        <div className='space-x-10'>
        <button className='bg-green-600 text-white p-4 rounded font-medium  ' onClick={incrementvalue}>Add value</button>
        <button className='bg-orange-600 text-white p-4 rounded font-medium  ' onClick={decrementvalue}>Subtract value</button>
        <button className='bg-red-600 text-white p-4 rounded font-medium  ' onClick={resetvalue}>Reset value</button>
        </div>
    </div>
    <div>
        <h1 className='text-center font-bold text-[50px]'>Props:</h1>
        <h1 className='text-center font-bold text-[50px] text-blue-800'>{props.message}</h1>
    </div>
    </>
  )
}

export default Hooks