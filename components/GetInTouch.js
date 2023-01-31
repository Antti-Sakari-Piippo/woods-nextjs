import React from 'react'
import ContactUs from './ContactUs'
import Divider from './divider'
import NewsLetter from './NewsLetter'

function GetInTouch() {
  return (
    <>
    <section className="get-in-touch py-[3.5rem] px-[2.5rem] bg-secondaryColor" id="getInTouchLink">
      <h4>Get In Touch</h4>
      <div className="get-in-touch__newsletter-and-contact-us flex justify-center gap-[4vw] lg:flex-wrap">
        <NewsLetter />
        <ContactUs />
      </div>
  </section>
  <Divider />
  </>
  )
}

export default GetInTouch