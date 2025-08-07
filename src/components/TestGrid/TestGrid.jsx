import React from 'react'

export const TestGrid = () => {
  return (
    <main className='flex items-center justify-center'>
        <div className='self-center pt-55 pb-20 grid grid-cols-3 gap-4 h-screen w-6/9'>
            <div className='col-span-2 row-span-2 flex items-center justify-center bg-blue-600 border border-gray-400 transition duration-300 ease-in-out hover:border-amber-400 hover:bg-blue-500'>
                <p className='text-center'>A</p>
            </div>
            <div className='flex items-center justify-center bg-blue-600 border border-gray-400 transition duration-300 ease-in-out hover:border-amber-400 hover:bg-blue-500'>
                <p className='text-center'>A</p>
            </div>
            <div className='flex items-center justify-center bg-blue-600 border border-gray-400 transition duration-300 ease-in-out hover:border-amber-400 hover:bg-blue-500'>
                <p className='text-center'>A</p>
            </div>
            <div className='col-span-2 flex items-center justify-center bg-blue-600 border border-gray-400 transition duration-300 ease-in-out hover:border-amber-400 hover:bg-blue-500'>
                <p className='text-center'>A</p>
            </div>
            <div className='flex items-center justify-center bg-blue-600 border border-gray-400 transition duration-300 ease-in-out hover:border-amber-400 hover:bg-blue-500'>
                <p className='text-center'>A</p>
            </div>
        </div>
    </main>
  )
}
