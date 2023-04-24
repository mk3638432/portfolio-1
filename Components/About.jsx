import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen  p-2 flex items-center py-16 '>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 max-w[700px] m-auto'>
                <p className='py-4 font-bold uppercase text-center text-xl text-[#5651e5]'>About</p>
                <h2 className='font-bold py-4 text-center'>Who I Am</h2>
                <p className='py-2 text-gray-600 '>
Being Crazy about programming, looking for a
suitable career to utilize my skills and abilities
to provide an effective contribution to serve
the organization and also to establish a robust
professional career for myself and to obtain a
challenging position that enables me to
become a recognized person</p>
<p className='py-2 underline cursor-pointer text-gray-600'>Check out soon My latest Project</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex justify-center p-4 hover:scale-105 ease-in duration-300 '>
                <img className='rounded-xl ' src='https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default About