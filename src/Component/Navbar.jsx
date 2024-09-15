import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className='w-[100%] h-[30px] bg-pink-600 pt-5 pb-[70px]'>
          <ul className='flex justify-center pr-5 items-center gap-10'>
            <li><a className='text-2xl font-semibold' href="/">Home</a></li>
            <li><a className='text-2xl font-semibold' href="/blog">Blog</a></li>
            <li><a className='text-2xl font-semibold' href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
