import React from 'react'
import Divider from './divider'
import Image from 'next/image';
import {newsData} from "../data"

function News() {
  return (
    <>
    <section className="justify-center bg-primaryColorDarker py-14 px-14" id="newsLink">
    <h4>Latest News</h4>
    <div className="news__content">
      <div className="news__cards grid justify-center grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-16 max-w-[1200px] mb-28 m-auto" id="news">
        {newsData.map((item) => {
            return (
           <div className= "m-auto rounded-xl w-[16vw] min-w-[20.25rem]" key="{item}">
           <Image
           className='border bg-cover rounded-t-xl h-[289]'
           width={385}
           height={308}
             src={item.image}
             alt=""
           />
           <div className="news__card__bottom py-9 px-7 bg-primaryColor rounded-b-xl">
             <h5 className='pb-5 leading-3'>Press release</h5>
             <p className='text-left pb-6 text-base'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
               aliquam...
             </p>
             <div className="flex">
               <p className="read-more__text text-base mr-1 font-bold h-[23px]">Read More</p>
               <Image
               className='read-more__arrow h-7 contain pt-1 pb-2 w-4'
               width="200"
               height="200"
                 src="/akar-icons_arrow-forward.png"
                 alt="arrow icon"
               />
             </div>
           </div>
         </div>
            )
        })}
      </div>
      <a className="mt-13 mb-8 block text-xl m-auto max-w-[1400px]" href="">See All News</a>
    </div>
  </section>
  <Divider />
    </>
  )
}

export default News