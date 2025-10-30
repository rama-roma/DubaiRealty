import React from 'react'
import '../index.css'
import img1 from '../assets/social icons (1).svg'
import Card1 from './card1'
import img2 from '../assets/428x573.png'
import img3 from '../assets/428x573 (1).png'
import img4 from '../assets/428x573 (2).png'
import img5 from '../assets/428x573.png'
import img6 from '../assets/placeholder.svg'
import img7 from '../assets/placeholder (1).svg'
import img8 from '../assets/350x350.svg'
import img9 from '../assets/350x350 (1).svg'
import VideoPlayer from './video'
import Card2 from './card2'
import Card3 from './card3'
import Product from './product'
import AccordionUsage from './accordion'

export default function Main() {
  return (
    <>
     <main className='max-w-[1500px] m-auto'>
      <section className='sea1'>
        <div className='p-4 flex flex-col gap-[30px]'>
          <img className='w-5 relative left-360' src={img1} alt="" />
          <ul className= 'relative left-50 text-[white] border-4 w-40 border-[#FCD54C] border-r-0 p-4'>
            <li>Lorem ipsum</li>
            <li className='text-[70px] w-160 font-bold'>Welcome Home <span className='text-[#FCD54C]'>To</span> Luxury</li>
            <li>Book a consultation</li>
          </ul>
          <div className='relative top-20 left-111 w-260 h-40 bg-[#272727] p-4 flex justify-between items-center'>
            <article className='text-[white] font-bold w-70 flex items-center gap-[20px]'>
              <p className='text-[60px]'>01</p>
              <p>Lorem Ipsum Dolorem apset</p>
            </article>
            <article className='text-[white] font-bold w-70 flex items-center gap-[20px]'>
              <p className='text-[60px]'>02</p>
              <p>Lorem Ipsum Dolorem apset</p>
            </article>
            <article className='text-[white] font-bold w-70 flex items-center gap-[20px]'>
              <p className='text-[60px]'>03</p>
              <p>Lorem Ipsum Dolorem apset</p>
            </article>
          </div>
        </div>
      </section><br /><br /><br />

      <section className='mb-30 flex flex-col gap-[20px] text-[white]'>
        <div className='flex justify-center gap-[350px] items-center'>
          <p className='text-[40px] font-bold'>Latest projects</p>
          <ul className='flex gap-[30px]'>
            <li>All</li>
            <li>Building</li>
            <li>Interior</li>
            <li>View all projects</li>
          </ul>
        </div>
        <div className='flex'> 
          <Card1 img={img2}/>
          <Card1 img={img3}/>
          <Card1 img={img4}/>
          <Card1 img={img5}/>
        </div><br /><br /><br />
      </section><br />

      <section className='mb-30 flex justify-center items-center'>
        <div className='p-4 w-160 flex flex-col items-start gap-[20px]'>
          <p className='text-[#FCD54C]'>Our expertise</p>
          <h1 className='text-[white] text-[50px] font-bold'>"The best apartment in Dubai" we will find your dream</h1>
          <p className='text-[#E8E8E8]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec viverra orci tristique vel. In efficitur vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>

      <VideoPlayer/>

      <section className='mb-30 flex justify-center'>
        <div className='w-190  text-[20px] text-[white] p-[30px] border border-[#FCD54C]'>
          <p>“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” <span className='text-[#FCD54C]'>— Mary Kay Ash</span> </p>
        </div>
      </section>

      <section className='mb-30 flex justify-center items-center gap-[100px]'>
        <Card2 img={img6} text="Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci."/>
        <Card2 img={img7} text="Vivamus non diam vel lorem efficitur mattis in gravida ante. Ut ullamcorper dapibus ante, eu tincidunt orci feugiat vel. Curabitur eget lectus lectus. Pellentesque malesuada, felis at accumsan interdum, nisl mi fermentum est, eu suscipit dui lorem a dui. Aliquam rhoncus risus in leo vestibulum efficitur. Suspendisse tortor quam, faucibus a lacinia a, bibendum vitae quam. Suspen disse et metus et orci rutrum dictum eu eu nibh. Suspendisse blandit in diam in rhoncus. Nam volutpat hendrerit enim, sed aliquet quam gravida at. Nullam dictum sagittis nisi, eu porta sem mollis eu. Nulla faucibus sed ipsum sed sodales. Curabitur varius iaculis felis, in aliquet sem suscipit quis. Ut vulputate, magna ac bibendum elementum, nulla magna tincidunt urna, a venenatis dolor arcu sed leo. "/>
      </section>

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

      <section className='mb-30 max-w-[1300px] m-auto flex flex-col text-[white]'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[50px] font-bold'>Useful articles</h1>
          <p className='text-[#929292]'>View all articles</p>
        </div><br />
        <div className='flex items-center justify-center'>
          <Card3 img={img8}/>
          <Card3 img={img9}/>
          <Card3 img={img8}/>
        </div>
      </section>

      <section className='mb-30 max-w-[1300px] m-auto flex justify-between items-center'>
        <Product/>
      </section>

      <section className='max-w-[1300px] m-auto mb-30 flex text-[white] flex-col gap-[20px]'>
        <h1 className='text-[60px] font-bold'>FAQ</h1>
        <AccordionUsage/>
      </section>

     </main>
    </>
  )
}
