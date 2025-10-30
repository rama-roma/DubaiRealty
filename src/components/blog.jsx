import React from 'react'
import Card4 from './card4'
import img1 from '../assets/shutterstock_40238476 1.svg'
import img2 from '../assets/shutterstock_40238476 1 (1).svg'
import img3 from '../assets/shutterstock_40238476 1 (2).svg'
import img4 from '../assets/shutterstock_40238476 1 (3).svg'
import img5 from '../assets/shutterstock_40238476 1 (4).svg'
import img6 from '../assets/shutterstock_40238476 1 (5).svg'
import img7 from '../assets/shutterstock_40238476 1 (6).svg'
import img8 from '../assets/shutterstock_40238476 1 (7).svg'
import img9 from '../assets/shutterstock_40238476 1 (8).svg'
import img10 from '../assets/shutterstock_40238476 1 (9).svg'
import img11 from '../assets/shutterstock_40238476 1 (10).svg'
import img12 from '../assets/shutterstock_40238476 1 (11).svg'
export default function Blog() {
  return (
    <main className='max-w-[1300px] m-auto'>
      <section className='mb-30 flex items-center justify-between'>
        <h1 className='text-[50px] text-[white] font-bold'>Blog</h1>
        <input type="text" placeholder='Search' className='bg-[white] p-4 rounded-[10px] w-150'/>
      </section>
      <section className="mb-30 flex flex-wrap items-center justify-center gap-[30px]">
        <Card4 img={img1}/>
        <Card4 img={img2}/>
        <Card4 img={img3}/>
        <Card4 img={img4}/>
        <Card4 img={img5}/>
        <Card4 img={img6}/>
        <Card4 img={img7}/>
        <Card4 img={img8}/>
        <Card4 img={img9}/>
        <Card4 img={img10}/>
        <Card4 img={img11}/>
        <Card4 img={img12}/>
      </section>
    </main>
  )
}
