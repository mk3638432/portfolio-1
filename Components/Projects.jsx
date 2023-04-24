import Link from "next/link"
const Projects = () => {
  return (
    <div>
        <div className='grid md:grid-cols-2 gap-8'>
           <div className='relative flex items-center justify-center h-auto group w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
       <img className='rounded-xl group-hover:opacity-5' src='https://res.cloudinary.com/practicaldev/image/fetch/s--E6uodaHV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i2.wp.com/stephenafamo.com/blog/wp-content/uploads/2019/07/Tailwind-CSS.jpg%3Ffit%3D1500%252C750%26ssl%3D1' alt='/'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>Property Finders</h3>
        <p className='pb-4 pt-2 text-white text-center'>NEXT-JS Project</p>
        <Link href='https://en.wikipedia.org/wiki/Manoj_Bajpayee'>
        <p className='text-center py-3 rounded-lg bg-white font-bold cursor-pointer'>More Info</p>
        </Link>
       </div>
         </div>
         <div className='relative flex items-center justify-center h-auto group w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
       <img className='rounded-xl group-hover:opacity-5' src='https://res.cloudinary.com/practicaldev/image/fetch/s--E6uodaHV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i2.wp.com/stephenafamo.com/blog/wp-content/uploads/2019/07/Tailwind-CSS.jpg%3Ffit%3D1500%252C750%26ssl%3D1' alt='/'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>Property Finders</h3>
        <p className='pb-4 pt-2 text-white text-center'>NEXT-JS Project</p>
        <Link href='/'>
        <p className='text-center py-3 rounded-lg bg-white font-bold cursor-pointer'>More Info</p>
        </Link>
       </div>
         </div>
         <div className='relative flex items-center justify-center h-auto group w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
       <img className='rounded-xl group-hover:opacity-5' src='https://res.cloudinary.com/practicaldev/image/fetch/s--E6uodaHV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i2.wp.com/stephenafamo.com/blog/wp-content/uploads/2019/07/Tailwind-CSS.jpg%3Ffit%3D1500%252C750%26ssl%3D1' alt='/'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>Property Finders</h3>
        <p className='pb-4 pt-2 text-white text-center'>NEXT-JS Project</p>
        <Link href='/'>
        <p className='text-center py-3 rounded-lg bg-white font-bold cursor-pointer'>More Info</p>
        </Link>
       </div>
         </div>
         <div className='relative flex items-center justify-center h-auto group w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
       <img className='rounded-xl group-hover:opacity-5' src='https://res.cloudinary.com/practicaldev/image/fetch/s--E6uodaHV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i2.wp.com/stephenafamo.com/blog/wp-content/uploads/2019/07/Tailwind-CSS.jpg%3Ffit%3D1500%252C750%26ssl%3D1' alt='/'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>Property Finders</h3>
        <p className='pb-4 pt-2 text-white text-center'>NEXT-JS Project</p>
        <Link href='/'>
        <p className='text-center py-3 rounded-lg bg-white font-bold cursor-pointer'>More Info</p>
        </Link>
       </div>
         </div>
         </div>
    </div>
  )
}

export default Projects