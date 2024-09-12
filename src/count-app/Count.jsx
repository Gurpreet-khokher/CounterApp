import React, { useState } from 'react'

const Count = () => {
  // useState for counter value is a "0":-
  const [counter, setCounter] = useState(0);

// set function of Increment:-
  const count1 = () =>{
    setCounter(counter + 1);
  }

// set function of Reset Count:-
  const count2 = () =>{
    setCounter(0);
  }

// set function of Decrement:-
  const count3 = () =>{
    setCounter(counter - 1);
  }

  return (
    <div className='bg-white place-self-center w-[65%] p-7 h-[350px] border-2 rounded-2xl flex flex-col items-center'>
      <h1 className=' text-5xl font-extrabold mb-7'>Counter App</h1>
      <div className=' mt-7 mb-7 flex gap-6'>
        <h2 className='text-4xl font-bold'> Count :  {counter}</h2>
      </div>
      <div className=' mt-7 flex gap-16'>
        <button onClick={count1} className='text-xl font-bold border-4 border-black rounded-2xl text-white bg-green-500 p-3 '>
          Increment

        </button>
        <button onClick={count2} className='text-xl font-bold border-4 border-black rounded-2xl p-3 '>
          Reset Count
        </button>
        <button onClick={count3} className='text-xl font-bold border-4 border-black rounded-2xl text-white bg-red-600 p-3 '>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Count