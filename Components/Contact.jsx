import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa'


const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
         <p className='text-xl tracking-widest uppercase text-center font-bold text-[#5651e5]'>Contact</p>
         <h2 className='font-vold text-center py-4 font-bold'>Get In Touch</h2>
         <div className='grid lg:grid-cols-5 gap-8 '>
            <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4 '>
  <div className='lg:p-4 h-full rounded-xl'>
 <div>
    <img className='rounded-xl hover:scale-105 ease-in duration-300 ' src='https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
 </div>
 <div>
    <h2 className='py-2'>Name Here</h2>
    <p>Front-End Devoloper</p>
    <p className='py-4'>I am Available for Working Front-End devoloper position. Contact me and let's talk</p>
 </div>
 <div>
    <p className='uppercase pt-8'>Connect With Me</p>
    <div className='flex items-center justify-between py-4'>
 <div className='rounded-full  shadow-lg shadow-gray-400 p-4 hover:scale-105 ease-in duration-900'>
    <FaLinkedin size={30}/>
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-105 ease-in duration-900'>
    <FaInstagram size={30}/>
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-105 ease-in duration-900'>
    <FaWhatsapp size={30}/>
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-105 ease-in duration-900'>
    <FaTwitter size={30}/>
   </div>
 </div>
 
 </div>
  </div>
            </div>
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 '>
          <div className='p-4 '>
      <form>
        <div className='grid md:grid-cols-2 gap-5 w-full py-2'>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Name</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>

            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Phone Number</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>

            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>

            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>

            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase  text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>

            </div>
        </div>
        <button className='w-full p-4 text-gray-100 bg-[#123842] mt-14'>SEND MESSAGE</button>

      </form>
          </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Contact