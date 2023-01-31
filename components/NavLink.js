import React, { Children } from 'react'

function NavLink({href, text}) {
  return (
    <li className='sm:ml-8 mb-6'><a className='text-white drop-shadow-md font-bold text-2xl' href={href}>{text}</a></li>
  )
}

export default NavLink
