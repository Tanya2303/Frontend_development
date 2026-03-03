import React from 'react'

const LeftContent = () => {
  return (
    <div className='w-[30%] text-black m-4 pt-11 pl-15 pb-8 rounded-lg flex flex-col justify-between'>
      <div>
         <h1 className='text-5xl font-bold leading-tight'>Prospective <br />customer <br /> segmentation</h1>
        <p className='font-mono mt-4 leading-[1.8] text-lg'>Depending on customer <br />satisfaction and access <br />to banking products, potential <br />target audience can be divided <br />into three groups</p>
      </div>
       <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right-icon lucide-move-up-right"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
       </div>
        
    </div>
  )
}

export default LeftContent