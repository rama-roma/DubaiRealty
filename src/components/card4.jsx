import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Card4({img}) {
  return (
    <div className='flex flex-col items-start rounded-[10px] gap-[20px] w-90 text-[white] border border-[#FCD54C] p-4'>
        <img src={img} alt="" />
        <h1 className='text-[20px] font-bold'>Commercial property in Abu Dhabi</h1>
        <p>In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...</p>
        <div className='flex items-center gap-[10px]'>
            <p>Learn more</p>
            <ArrowForwardIosIcon/>
        </div>
    </div>
  )
}
