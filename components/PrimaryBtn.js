import React from 'react'

function PrimaryBtn({text}) {
  return (
    <button className="primary-btn pt-3 pb-3 pl-6 pr-6 text-2xl sm:text-xl rounded-3xl text-center bg-primaryColor">{text}</button>
  )
}

export default PrimaryBtn