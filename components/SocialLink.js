import React from 'react'
import Image from 'next/image'

function SocialLink({src, alt, text}) {
  return (
    <>
    <div className="site flex row mb-2">
      <Image width={32} height={32} className="object-contain mb-1 mr-2" src={src}  alt={alt} />
      <a className="mb-2 text-lg" href="">{text}</a>
    </div>
    </>
  )
}

export default SocialLink