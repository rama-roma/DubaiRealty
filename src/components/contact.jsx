import React, { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    // Ждем загрузки API Яндекс.Карт
    const initMap = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          new window.ymaps.Map("map", {
            center: [55.76, 37.64], 
            zoom: 10
          });
        });
      }
    };

  
    if (window.ymaps) {
      initMap();
    } else {
      
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className='mt-10 max-w-[1000px] m-auto mb-10'>
        <h1 className='text-[white] text-[40px] font-bold mb-6'>Contact</h1>
      </div>
      <div className='flex justify-between max-w-[1200px] m-auto mb-30'>
          <div className='bg-[#3d3d3d] p-4 rounded-[10px] flex flex-col gap-[30px] items-start justify-center'>
            <h1 className='text-[white] text-[30px] font-bold'>Dubai, <span className='text-[#FCD54C]'>UAE</span></h1>
            <p className='text-[#929292]'>269 King Str, 05th Floor, Utral Hosue Building, Dubai, VIC 3000, UAE.</p>
            <h1 className='text-[white] text-[30px] font-bold'>+99 (0) 344 956 4050</h1>
            <p className='text-[grey]'>Email: info@sparch.com</p>
            <p className='text-[grey]'>Follow us:</p>
            <p className='text-[grey]'>Work Hours:Monday - Friday : 08h00 - 17h30</p>
          </div>
          <div 
          id="map"
          className="mt-4 rounded-lg shadow-lg overflow-hidden border-2 border-[#FCD54C]"
          style={{ width: '600px', height: '600px' }}
        ></div>
        </div>

      <div className='max-w-[1300px] m-auto flex flex-col gap-[30px] mb-30'>
        <h1 className='text-[40px] font-bold text-[white] w-90'><span className='text-[#FCD54C]'>Be in touch</span> with us</h1>
        <div className='flex items-center justify-between'>
          <input className='border p-4 rounded-[5px] border-[grey] text-[grey] w-100' type="text" placeholder='Name' />
          <input className='border p-4 rounded-[5px] border-[grey] text-[grey] w-100' type="text" placeholder='Email *' />
          <input className='border p-4 rounded-[5px] border-[grey] text-[grey] w-100' type="text" placeholder='Subject' />
        </div>
        <textarea name="Message *" id="Message *" placeholder='Message *'className='border p-4 rounded-[5px] border-[grey] text-[grey]' ></textarea>
        <button className='bg-[#FCD54C] p-4 w-50'>SUBMIT</button>
      </div>
    </>
  )
}