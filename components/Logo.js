import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
    <div className="header__logo flex absolute top-8 left-8 gap-1">
        <h1>Woods</h1>
        <Image width="200" height="200" className="cursor-pointer object-contain w-[1.6vw] min-w-[1.5rem]" src="/icons/logoTree.png" alt="logo tree" />
    </div>
    )
}

export default Logo