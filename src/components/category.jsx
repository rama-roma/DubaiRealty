import React from 'react'
import img13 from '../assets/350x350.svg'
import img14 from '../assets/350x350 (1).svg'
import Card3 from './card3'
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
export default function Category() {
  return (
    <>
     <section className='sea4'>
      <div className='max-w-[1300px] m-auto flex justify-center items-end h-170'>
        <h1 className='w-80 text-center text-[50px] font-bold text-[white]'>Apartments <span className='text-[#FCD54C]'> in Dubai</span></h1>
      </div>
     </section>

     <section className='mt-20 mb-20 max-w-[1300px] m-auto flex flex-col items-center gap-[30px]'>
      <h1 className='text-[white] text-[40px] font-bold'>All Apartments Category</h1>
      <section className='mb-30 max-w-[1300px] m-auto flex flex-col text-[white]'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[50px] font-bold'>Useful articles</h1>
          <p className='text-[#929292]'>View all articles</p>
        </div><br />
        <div className='flex items-center gap-[20px] justify-center'>
          <Card3 img={img13}/>
          <Card3 img={img14}/>
          <Card3 img={img13}/>
          <Card3 img={img14}/>
        </div>
      </section>
     </section>

     <section className='mb-20 max-w-[1300px] m-auto flex flex-col items-center gap-[30px]'>
      <h1 className='text-[40px] font-bold text-[white]'>Best Offers</h1>
      <div className='flex flex-wrap items-center justify-center gap-[20px]'>
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
      </div>
     </section>

     <section className='max-w-[1100px] m-auto flex flex-col items-start text-[white]'>
       <h1 className='text-[40px] font-bold'>Apartments</h1><br />
       <p className='text-[#929292]'>To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</p><br />
       <h1 className='text-[40px] font-bold'>Everything along the way</h1>
       <p className='text-[#929292]'>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p>
     </section>

     <section className='mt-20 max-w-[1980px] m-auto'>
            <section className='sea2'>
        <div className='max-w-[1500px] m-auto flex flex-col justify-center h-100 items-center gap-[20px]'>
          <p className='text-[#272727]'>Do you have any questions?</p>
          <h1 className='text-[#272727] text-[80px] font-bold'>Contact us</h1>
          <div className='flex'>
            <input placeholder='Enter your mail' type="text" className='bg-[white] p-[20px]' />
            <button className='bg-[#272727] p-[10px] w-30 text-[white]'>Send</button>
          </div>
        </div>
      </section>
     </section>
    </>
  )
}
