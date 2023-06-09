import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'  className='w-full h-screen text-center'>
       <div className='max-w[1240px] w-full h-full mx-auto p-2 flex justify-center  items-center'>
        <div >
  <p className='uppercase text-sm md:text-xl text-gray-600 '>Let's Build something together</p>
  <h1 className='text-xl py-4 text-gray-700 font-bold'>Hii I'm <span className='text-2xl text-[#5651e5]'> Manoj Kumar </span> </h1>
  <p className='p-4 text-gray-600 max-w-[70%] m-auto font-bold' >I'm a Front-End web devoloper specializing in building (and occasionally designing) exceptional 
    digit experience. currently i'm focused on building responsive and attractive front-end application while learning
    back-end technologies </p>
    <div className='flex justify-between gap-4 text-[#5651e5] items-center max-w-[330px] m-auto py-4'>
   <div className='rounded-full  shadow-lg shadow-gray-400 p-4 hover:scale-105 ease-in duration-900'>
    <Link href='https://www.linkedin.com/in/manoj-kumar-2805b2262/'>
    <FaLinkedin size={30}/>
    </Link>
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-105 ease-in duration-900'>
   <Link href='https://instagram.com/manojkumar38810?igshid=YmMyMTA2M2Y='>
    <FaInstagram size={30}/>
    </Link>
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-105 ease-in duration-900'>
    <Link href='https://github.com/mk3638432'>
    <FaGithub size={30}/>
    </Link>
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-105 ease-in duration-900'>
    <Link href='https://twitter.com/manoj77050?t=B0lKIQLGD4XT3pntnxi0nQ&s=09'>
    <FaTwitter size={30}/>
    </Link>
   </div>
    </div>
        </div>
        </div> 
    </div>
  )
}

export default Main