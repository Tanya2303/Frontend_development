import React from 'react'

const Navbar = () => {
  return (
    <div className='h-30 w-full bg-white flex items-center justify-between px-4'>
        <div>
            <h4 className='text-white bg-black pt-2 pb-2 pl-4 pr-4 rounded-3xl text-base tracking-widest ml-15 mt-2'>TARGET AUDIANCE</h4>
        </div>
        <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-corner-down-right-icon lucide-corner-down-right"><path d="m15 10 5 5-5 5"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>
        <button className='tracking-[3.5px] text-base mr-13 font-semibold'>DIGITAL BANKING PLATFORM</button>

        </div>
        
        
    </div>
  )
}

export default Navbar