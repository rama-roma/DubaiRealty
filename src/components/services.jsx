import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from '../assets/1110x628.svg'
import img2 from'../assets/”.svg'
import img3 from '../assets/530x302.svg'
import img4 from '../assets/540x302.svg'
import img5 from '../assets/540x634.svg'
import img8 from '../assets/350x350.svg'
import img9 from '../assets/350x350 (1).svg'
import ServiceTable from './table';
import Card3 from './card3';
export default function Services() {
  return (
    <main className='max-w-[1980px] m-auto'>
      <section className='sea3'>
        <div className='max-w-[1300px] m-auto flex flex-col items-start justify-end h-150 gap-[10px] text-[white] font-bold'>
          <p>Rent</p>
          <h1 className='text-[50px] w-170'>Furnished Apartments <span className='text-[#FCD54C]'>in Dubai</span></h1>
        </div>
      </section>

      <div className='mt-10 mb-10 max-w-[1300px] m-auto'>
        <section className='flex flex-col gap-[20px]'>
          <div className='text-[white] flex items-center gap-[10px]'>
            <p>Main</p>
            <ArrowForwardIosIcon/>
            <p>Services</p>
            <ArrowForwardIosIcon/>
            <p>Rent</p>
            <ArrowForwardIosIcon/>
            <p>Furnished Apartments in Dubai</p>
          </div>
          <div className='flex flex-col  items-center gap-[30px] text-[#929292]'>
            <p className='w-180'>This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring.</p>
            <p className='w-180'>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: </p><br />
            <p className='w-180'>This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring.</p>
            <p className='w-180'>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: </p>
          </div>
        </section><br /><br />
        <section className='flex justify-center mb-30'>
          <img className='rounded-[10px]' src={img1} alt="" />
        </section>

        <section className='max-w-[780px] m-auto flex flex-col text-[white] items-start gap-[20px]'>
          <h1 className='text-[30px] font-bold'>Methods for Everyone</h1>
          <p className='text-[#929292]'>Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</p>
          <p className='text-[#929292]'>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p><br /><br />
          <div className='border-2 border-[#FCD54C] w-[780px] text-[white] h-60 p-4 flex items-center justify-between'>
             <img className='w-20 relative top-[-50px]' src={img2} alt="" />
             <div className='flex flex-col items-start'>
              <h1 className='font-bold w-160'>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. emotional sensation of stress from our firs</h1>
              <br />
              <p>Paul</p>
              <p className='text-[#929292]'>Elite Author</p>
             </div>
          </div>
        </section>

        <section className='mt-20 flex justify-center gap-[20px]'>
          <div className='flex flex-col gap-[30px]'>
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
          <img src={img5} alt="" />
        </section>

        <section className='mt-20 max-w-[800px] m-auto flex items-center justify-between relative left-[-50px]'>
          <div className='text-[white] flex gap-[20px] w-30 items-center'>
            <p className='text-[#FCD54C] text-[80px] font-bold'>20</p>
            <p>YEARS WORKING</p>
          </div>
          <div className='text-[white] flex gap-[20px] w-30 items-center'>
            <p className='text-[#FCD54C] text-[80px] font-bold'>7</p>
            <p>TALANTED MANAGERS</p>
          </div>
          <div className='text-[white] flex gap-[20px] w-30 items-center'>
            <p className='text-[#FCD54C] text-[80px] font-bold'>100</p>
            <p>COMPLITLY PROJECTS</p>
          </div>
        </section>

        <section className='mt-20 max-w-[1100px] m-auto flex flex-col items-start gap-[20px] text-[white]'>
          <h1 className='text-[40px] font-bold'>Challenge</h1>
          <br />
          <p className='text-[#929292]'>To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</p>
          <br /><br />
          <h1 className='text-[40px] font-bold'>Everything along the way</h1>
          <p className='text-[#929292]'>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p>
          <br />
          <br />
          <div className='border-2 border-[#929292] w-full'></div>
          <br /><br />
          <ul className='text-[#929292] flex flex-col gap-[10px]'>
            <li>Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. </li>
            <li>Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</li>
            <li>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. </li>
            <li>We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</li>
          </ul>
        </section>

      </div>

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

      <ServiceTable/>

      <section className='mt-30 mb-30 max-w-[1300px] m-auto flex flex-col text-[white]'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[40px] font-bold'>We will also propose</h1>
          <p className='text-[#929292]'>View all articles</p>
        </div><br />
        <div className='flex items-center justify-center'>
          <Card3 img={img8}/>
          <Card3 img={img9}/>
          <Card3 img={img8}/>
        </div>
      </section>
    </main>
  )
}
