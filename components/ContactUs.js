import React from 'react'

function ContactUs() {
  return (
    <div className="get-in-touch__contact-us lg:mb-10">
    <h3 className='mt-8 mb-5 xm:text-center'>Contact Us</h3>
    <form className='flex sm:flex-wrap-reverse sm:m-auto gap-6'> 
      <div className="contact-us__form_details sm:m-auto">
        <input className='sm:w-[265px] block mb-4' type="text" id="name" name="user_name" placeholder="name" />
        <input
        className='sm:w-[265px] block mb-4'
          type="email"
          id="mail"
          name="user_email"
          placeholder="email"
        />
          <input
          className='block mb-4'
            type="subject"
            id="subject"
            name="subject"
            placeholder="subject"
          />
        <input className="submit-btn border-none bg-primaryColor rounded-lg w-[130px]" type="submit" value="Submit"></input>
      </div>
      <textarea
      className='sm:w-[265px] sm:m-auto mt-0'
        id="msg"
        name="user_message"
        placeholder="message"
      ></textarea>
    </form>
  </div>
  )
}

export default ContactUs