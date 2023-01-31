import React from 'react'
import Divider from './divider'
import { solutionsData } from "../data"
import Image from 'next/image'
import SecondaryBtn from './SecondaryBtn'

function Solutions() {
  return (
    <>
    <section className="solutions bg-primaryColorDarker py-14 px-10 text-center" id="solutionsLink">
    <h4 className='mb-6'>Solutions</h4>
    <p className='mx-auto mt-0 mb-14 max-w-[58ch]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
      purus sit amet luctus venenatis, lectus magna fringilla urna.
    </p>
    <div className="grid justify-center grid-cols-3 lg:grid-cols-1 w-fit m-auto gap-20 lg:gap-8" id="solutions">
      {
      solutionsData.map((item) => {
        return (
          <div className="bg-primaryColor h-[25rem] w-[16vw] min-w-[19.25rem] rounded-xl  mb-8" key="{item}">
          <div className="container">
              <p className="solutions__card__head text-xl pt-5 text-center m-auto">
              Enabling a more sustainable, resilient and liveable world
              </p>
              <Image className='ml-auto mr-auto mt-8 mb-8 h-16 object-contain' width={80} height={80} src={item.icon} />
              <SecondaryBtn text="See More"/>
              <div className="mt-6 border-b-2 w-3/4 m-auto mb-6"></div>
              <p className="text-base leading-6 text-left w-[85%] m-auto">Thriving cities</p>
              <p className="text-base leading-6 text-left w-[85%] m-auto">Critical infrastructure</p>
              <p className="text-base leading-6 text-left w-[85%] m-auto">Cleaner, protected environments</p>
          </div>
      </div>
        )
      })
    }

    </div>
  </section>
  <Divider />
  </>
  )
}

export default Solutions