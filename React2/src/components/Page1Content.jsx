import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='w-full h-[700px] flex'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1Content