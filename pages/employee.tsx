import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'

function employee() {
  return (
    <div>
        <div id="heading">
        <Header />
        <div id="employee-head" className='flex space-x-20 justify-between max-w-1280px mx-auto py-2 px-4 bg-red-50 border-solid border-y-2 border-black-500'>
            <div>
                <h3 className='font-bold my-3'>Employee</h3>
            </div>
            <div className="hidden md:inline-flex space-x-10 ">

                 <h3 className='my-3'>search</h3>

                <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6532 15.1169C12.6403 14.0124 13.5253 13.1066 14.6297 13.0937L30.6287 12.9076C31.7332 12.8947 32.6389 13.7797 32.6518 14.8842L32.6613 15.7016C32.6702 16.4614 32.3903 17.1963 31.8784 17.7578L26.294 23.8824C25.9526 24.2568 25.7661 24.7467 25.772 25.2532L25.8196 29.3466C25.824 29.7253 25.6141 30.0741 25.2773 30.2474L21.3008 32.2938C20.6398 32.634 19.8519 32.1596 19.8433 31.4163L19.7724 25.323C19.7665 24.8165 19.5686 24.3311 19.2187 23.9648L13.4933 17.9718C12.9684 17.4223 12.6715 16.6941 12.6627 15.9343L12.6532 15.1169Z" stroke="#202020" stroke-width="1.5"/>
</svg>
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="13.5" y="14" width="7" height="7" rx="2.5" stroke="#202020" stroke-width="1.5"/>
<rect x="13.5" y="24" width="7" height="7" rx="2.5" stroke="#202020" stroke-width="1.5"/>
<rect x="23.5" y="14" width="7" height="7" rx="2.5" stroke="#202020" stroke-width="1.5"/>
<rect x="23.5" y="24" width="7" height="7" rx="2.5" stroke="#202020" stroke-width="1.5"/>
</svg>
<button className='border-2 px-4 py-0.4 hover:border-t-4 rounded-2xl'>Add</button>
           </div>
    </div>
    </div>
    <div id="sidebar" className='hidden'>
        <Sidebar/>
    </div>
    </div>
  )
}

export default employee