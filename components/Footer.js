import React from 'react'
import Divider from './divider'
import Image from 'next/Image'
import SocialLink from './SocialLink'


/* .footer {
  background-color: var(--secondaryColor);
  height: 100%;
  padding: var(--sectionMargin);
  padding-bottom: 2rem;
  flex-wrap: wrap;
  [3.5rem 2.5rem]
} */

function Footer() {
  return (
    <>
    <section className="footer h-full text-left justify-center gap-14 pb-8 pt-14 pl-10 pr-10 flex-wrap grid grid-cols-2 sm:grid-cols-1 w-fit m-auto">
      <div className="footer__privacy">
        <h5 className='pb-8'>Privacy and Accessibility</h5>
        <ul className='mb-8'>
          <li className='mb-3'><a className='text-lg' href="">Privacy Notice</a></li>
          <li className='mb-3'><a className='text-lg' href="">Woods Worker Privacy Notice</a></li>
          <li className='mb-3'><a className='text-lg' href="">Cookies</a></li>
          <li className='mb-3'><a className='text-lg' href="">Social Media</a></li>
          <li className='mb-3'><a className='text-lg' href="">Accessibility</a></li>
          <li className='mb-3'><a className='text-lg' href="">Get in touch</a></li>
        </ul>
      </div>
      <div className="footer__social pb-8">
          <h5 className='pb-8 text-2xl'>Social channels</h5>
          <SocialLink src="/icons/akar-icons_linkedin-box-fill.png" alt="LinkedIn" text="LinkedIn"/>
          <SocialLink src="/icons/bi_twitter.png" alt="Twitter" text="Twitter"/>
          <SocialLink src="/icons/akar-icons_facebook-fill.png" alt="Facebook" text="Facebook"/>
          <SocialLink src="/icons/bi_youtube.png" alt="Youtube" text="Youtube"/>
          <SocialLink src="/icons/cib_instagram.png" alt="Instagram" text="Instagram"/>
      </div>
    </section>
    </>
  )
}

export default Footer