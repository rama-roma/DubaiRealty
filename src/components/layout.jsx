import React, { useState } from 'react'
import { Link, Outlet } from "react-router";
import '../index.css'
import logo from '../assets/Logo.svg'
import img1 from '../assets/social icons.svg'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField} from '@mui/material'
export default function layout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className='max-w-[1600px] m-auto p-4 text-[white]'>
        <nav className='flex justify-between items-center'>
          <Link to="/main">
            <img src={logo} alt="" />
          </Link>
          <ul className='flex gap-[20px]  '>
            <select className='text-[#FCD54C] w-15'>
              <option value="">Buy</option>
              <option value="">Category number one </option>
              <option value="">Apartments in Dubai</option>
              <option value="">Category number twenty five</option>
            </select>
            <Link to="/blog">Blog</Link>
            <Link to="/category">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
          </ul>
          <div className='flex items-center gap-[20px]'>
            <Button onClick={() => setOpen(true)} variant="contained" sx={{bgcolor:"#FCD54C", color:"black", fontWeight:"bold"}}>Book a consultation</Button>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#FCD54C]'>EN</p>
              <p>RU</p>
            </div>
            <p>+7 (212) 674-25-10</p>
          </div>
        </nav>
      </header>


      <main>
        <Outlet/>
      </main>

      <footer className='max-w-[1980px] m-auto bg-[#000000] p-4'>
        <section className='max-w-[1600px] m-auto flex flex-col gap-[20px]'>
          <div className='flex justify-center'>
            <img src={logo} alt="" />
          </div><br />
          <div className='flex items-start justify-between text-[#8a8989] text-[13px]'>
            <article className='flex flex-col items-start gap-[10px]'>
              <h1 className='text-[20px]'>Buy</h1>
              <p>Apartment in Dubai</p>
              <p>House in Dubai</p>
              <p>Apartments in Dubai</p>
              <p>Loft in Dubai</p>
              <p>Penthouse in Dubai</p>
              <p>Villa in Dubai</p>
            </article>
            <article className='flex flex-col items-start gap-[10px]'>
              <h1 className='text-[20px]'>Services</h1>
              <p>Property management in Dubai, UAE</p>
              <p>Sell ​​property in Dubai, UAE</p>
              <p>Rent property in Dubai, UAE</p>
              <p>Investments in Dubai, UAE</p>
              <p>Real estate for cryptocurrency in Dubai</p>
              <p>Moving to Dubai, UAE</p>
            </article>
            <article className='flex flex-col items-start gap-[10px]'>
              <h1 className='text-[20px]'>Information</h1>
              <p>Video</p>
              <p>Podcasts</p>
              <p>Laws</p>
              <p>Questions and answers</p>
              <p>Books</p>
              <p>Articles</p>
            </article>
            <article className='flex flex-col items-start gap-[10px]'>
              <h1 className='text-[20px]'>About company</h1>
              <p>Jobs </p>
              <p>Story</p>
              <p>Licenses</p>
              <p>Why are we</p>
              <p>Real estate agency</p>
            </article>
            <article className='flex flex-col items-start gap-[20px]'>
              <h1 className='text-[20px]'>Contact</h1>
              <p>964 Worthington Drive</p>
              <p>Dubai, UAE</p>
              <p>dubairealty@mail.com</p>
              <Button onClick={() => setOpen(true)} variant="contained" sx={{bgcolor:"#FCD54C", color:"black", fontWeight:"bold"}}>Book a consultation</Button>
            </article>
          </div><br />
        </section>
      </footer><br />
      <div className='max-w-[1500px] m-auto flex justify-between items-center'>
        <p className='text-[white]'>Copyright © 2022 Dubai Realty</p>
        <img src={img1} alt="" />
      </div><br />
          <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='text-center' sx={{fontSize:"35px", fontWeight:"bold"}}>
          {"Leave your contacts"}
        </DialogTitle>
        <DialogContent className='text-center'>
          <DialogContentText className='flex flex-col gap-[20px]' id="alert-dialog-description">
            we will contact you within three hours
            <TextField id="filled-basic" label="Name" variant="filled" />
            <TextField id="filled-basic" label="Phone" variant="filled" />
            <Button variant="contained" sx={{bgcolor:"#FCD54C", color:"black", fontWeight:"bold"}}>Send</Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{color:"#FCD54C"}} onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>

    
  )
}
