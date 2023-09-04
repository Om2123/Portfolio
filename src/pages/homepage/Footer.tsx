import React from 'react'

export default function Footer() {
  return (
    <footer>
      <nav>
        <div className="nav-links-container mt-72">
          <ul className="nav-links flex justify-center py-6 ">
            <li><a href="#about " className='px-3 py-5 text-2xl' >About</a></li>
            <li><a href="#experience" className='px-3 py-5 text-2xl '>Skills</a></li>
            <li><a href="#projects" className='px-3 py-5 text-2xl '>Projects</a></li>
            <li><a href="#contact" className='px-3 py-5 text-2xl '>Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Om Wakhare. All Rights Reserved.</p>
    </footer>
  )
}
