import './globals.css'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

    <body>{children}</body>
    </html>
  )
}


{/* <section className="header">
<div className="nav-close" id="nav-close"></div>
<nav>
  <image width={520} height={280} className="hamburger" aria-controls="navigation" src="/public/icons/hamburger.png" id="hamburger" alt="hamburger icon" />
  <ul id="navigation">
    <li><a href="#solutionsLink">Solutions</a></li>
    <li><a href="#getInTouchLink">Get In Touch</a></li>
    <li><a href="#newsLink">Latest News</a></li>
    <li><a href="">Our Goals</a></li>
    <li><a href="">Career</a></li>
  </ul>
</nav>
<div className="header__logo">
  <h1>Woods</h1>
  <image width={520} height={280} className="header__tree" src="" alt="logo tree" />
</div>
<div className="header__centered">
  <h2>BUILDING RESPONSIBLY</h2>
  <h3>
    Collaborating to promote the welfare of constructors and lumberjacks
  </h3>
  <div className="header__centered__buttons">
    <button className="primary-btn">Read our principles</button>
    <button className="primary-btn">Subscribe to Newsletter</button>
  </div>
</div>
</section> */}