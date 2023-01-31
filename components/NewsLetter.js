import React from 'react'

// background-image: url("/images/woody.png");

function NewsLetter() {
  return (
    <div className="get-in-touch__newsletter w-[29.4rem] h-[23.5rem] relative bg-no-repeat bg-cover flex rounded-lg bg-[url('/images/woody.png')] mb-16 lg:mb-0">
    <div className="get-in-touch__newsletter__box absolute bottom-6 right-6">
      <h3 className="mb-2">Newsletter</h3>
      <form action="text">
        <input
          type="text"
          className="get-in-touch__textfield rounded-l-lg"
          id="email"
          name="email"
          placeholder="email"
        />
        <input type="submit" className="bg-primaryColor border-none h-[44px] rounded-r-lg" value="Subscribe" />
      </form>
    </div>
  </div>
  )
}

export default NewsLetter