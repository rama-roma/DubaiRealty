import React from 'react'

export default function Card2({img, text}) {
  return (
    <div className='flex flex-col items-start gap-[20px] w-120'>
        <img src={img} alt="" />
        <p className='text-[#E8E8E8]'>{text}</p>
    </div>
  )
}
