import React, { useState, useRef } from 'react'


const Ref = () => {
    const inputref = useRef('')
    const[name, setName] = useState('TAKEOFF')

    function reset(){
        setName('')
        inputref.current.focus()
    }
    function handleinput(){
        inputref.current.style.color='blue';
        inputref.current.focus()
        inputref.current.value='BANOQABIL 2.0'
    }




  return (
    
    <div className='text-center m-4'>
        <input className='bg-gray-400 w-[250px] h-[50px] rounded p-4 font-serif border-white' ref={inputref} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <div className='space-x-10 py-[20px]'>
        <button className='bg-green-600 text-white p-4 rounded font-medium' onClick={handleinput}>Focus the value</button>
        <button className='bg-red-600 text-white p-4 rounded font-medium ' onClick={reset}>Reset</button>
        </div>
     </div>
    
  )
}

export default Ref