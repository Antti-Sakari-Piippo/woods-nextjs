'use client';
import React from 'react'
import { useState } from "react";
import Divider from './divider'
import NavLink from './NavLink'
import PrimaryBtn from './PrimaryBtn'
import Logo from './Logo'
import Hamburger from './Hamburger'

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="header h-[61rem] grid relative bg-center bg-no-repeat bg-blend-overlay bg-overlayColor bg-[url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80')]">
      <div onClick={() => setOpen(open => false)} className="nav-close absolute left-0 top-0 w-[75vw] h-[61rem]" id="nav-close"></div>
      <nav>
        <div onClick={() => setOpen(open => !open)}>
          <Hamburger />
        </div>
        <ul className={`flex gap-8 absolute top-12 right-12 justify-end z-30 sm:absolute sm:ease-in-out sm:bg-secondaryColor sm:pt-40 ${open ? "sm:translate-x-0" : "sm:translate-x-full"} duration-300 sm:gap-0 sm:justify-start sm:flex-col sm:w-[12.5rem] sm:h-[61rem] sm:opacity-90 sm:right-0 sm:top-0 z-50`} id="navigation">
          <NavLink href="#solutionsLink" text="Solutions" />
          <NavLink href="#getInTouchLink" text="Get In Touch" />
          <NavLink href="#newsLink" text="Latest News" />
          <NavLink href="#" text="Career" />
        </ul>
      </nav>
    <Logo />
      <div>
        <h2 className='text-center text-7xl sm:text-[2.8rem] mb-5 mt-16 uppercase'>BUILDING RESPONSIBLY</h2>
        <h3 className='text-center sm:text-2xl'>
          Collaborating to promote the welfare of constructors and lumberjacks
        </h3>
        <div className="header__centered__buttons ml-10 mr-10 flex justify-center mt-16 mb-0 z-50 gap-[5vw]">
          <PrimaryBtn text="Read Our Principles"/>
          <PrimaryBtn text="Subscribe To Newsletter"/>
        </div>
      </div>
    </section>
    <Divider />
  </>
  )
}

export default Header