import Link from "next/link"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedin , FaInstagram , FaGithub ,FaTwitter} from 'react-icons/fa'
import { useEffect, useState } from "react"

const Navbar = () => {
    const [nav ,setNav] = useState(false)
    const [shadow , setShadow] = useState(false)
    const [color ,setColor] = useState("transparent")

    const handleNav =() => {
        setNav(!nav)
    }



    useEffect(() => {
        const handleShadow = (() => {
            if(window.scrollY >= 90) {
                setShadow(true)   
            }
            else {
                setShadow(false)
            }    
        }) 
        window.addEventListener("scroll" , handleShadow)
    } , [])

  return (
    <div className= {shadow ? ' fixed w-full h-20 z-[20] shadow-lg ' : ' fixed z-[30] w-full h-20 '}>
        <div className='flex justify-between items-center w-full h-full px-2 lg:px-16'>
     <img className='w-[105px] h-[50px] object-contain' src='https://i.pinimg.com/474x/9c/da/b0/9cdab017fb69369e0bcfe7d8f07e6847--designer-handbags-outlet-designer-bags.jpg' alt='/'/>
     <div>
        <ul className="hidden md:flex font-bold">
            <Link href="/">
                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href="/#about">
                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href="/#skills">
                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href="/#project">
                <li className='ml-10 text-sm uppercase hover:border-b'>Project</li>
            </Link>
            <Link href="/#contact">
                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={30}/>
        </div>
     </div>
        </div>
        <div className= {nav  ? "fixed left-0 top-0 w-full h-screen bg-black/50" : ""}>
         <div className= {nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-white" : 
        "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-white"}>
  <div>
    <div className="flex w-full items-center justify-between">
    <img className='w-[80px] h-[50px] object-contain' src='https://i.pinimg.com/474x/9c/da/b0/9cdab017fb69369e0bcfe7d8f07e6847--designer-handbags-outlet-designer-bags.jpg' alt='/'/>
    <div onClick={handleNav} className="rounded-full border shadow-lg shadow-gray-400 p-[1px] cursor-pointer">
        <AiOutlineClose size={30}/>
    </div>
    </div>
    <div className="border-b border-gray-300 my-4">
        <p className="w-[85%] md-w[90%] py-4">Lets Build Something legendary together</p>
    </div>
  </div>
  <div>
    <ul>
    <Link href="/">
                <li onClick={() => setNav(false)} className='py-4 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href="/#about">
                <li onClick={() => setNav(false)} className=' py-4  text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href="/#skills">
                <li onClick={() => setNav(false)} className=' py-4  text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href="/#project">
                <li onClick={() => setNav(false)} className='  py-4  text-sm uppercase hover:border-b'>Project</li>
            </Link>
            <Link href="/#contact">
                <li onClick={() => setNav(false)} className='  py-4  text-sm uppercase hover:border-b'>Contact</li>
            </Link>
    </ul>
    <div className="pt-20">
        <p className="font-bold text-center text-[#5651e5] uppercase">Let's Connect</p>
        <div>
            <div className="rounded-full flex justify-evenly text-[#5651e5] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                <Link href='https://www.linkedin.com/in/manoj-kumar-2805b2262'> 
                 <FaLinkedin/>
 </Link>
            <Link href='https://instagram.com/manojkumar38810?igshid=YmMyMTA2M2Y='>  <FaInstagram/> </Link>
            <Link href='https://twitter.com/manoj77050?t=B0lKIQLGD4XT3pntnxi0nQ&s=09'>
            <FaTwitter/>
            </Link>
            <Link href='https://github.com/mk3638432' >     <FaGithub/></Link>
        
            </div>
     
        </div>
    </div>
  </div>
         </div>
        </div>
    </div>
  )
}

export default Navbar