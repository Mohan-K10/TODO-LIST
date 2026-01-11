import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav bg-black text-white flex justify-between p-3'>
        <h2 className='font-bold mx-4'>TODO</h2>
        <ul className='flex gap-8 mx-9'>
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>My todos</li>
        </ul>
    </nav>
  )
}

export default Navbar
