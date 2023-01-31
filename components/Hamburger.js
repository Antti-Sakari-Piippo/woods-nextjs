import React from 'react'
import Image from 'next/image'

function Hamburger() {
  return (
    <Image width={60} height={60} className="hidden absolute sm:block top-[3rem] z-50 right-[3rem]" aria-controls="navigation" src="/icons/hamburger.png" id="hamburger" alt="hamburger icon" />
  )
}

export default Hamburger