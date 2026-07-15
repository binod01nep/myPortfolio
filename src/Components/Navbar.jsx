import React, { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="
        fixed top-2 inset-x-2 z-50
        flex justify-between items-center
        px-6 py-3
        text-white
      "
    >

      {/* Logo */}
      <a href="#home">
        <img
          src="https://i.pinimg.com/originals/af/09/41/af0941ba06185e9846af909ba9350baf.png"
          alt="logo"
          className="h-15 w-15 object-cover border border-white/15 rounded-full"
        />
      </a>

      {/* Center Glass Navbar (Desktop) */}
      <div className="hidden min-[700px]:flex absolute left-1/2 -translate-x-1/2">

        <div
          className="
            flex items-center gap-10
            px-8 py-3
            rounded-full
            backdrop-blur-3xl
            border border-white/20
            shadow-lg
            text-lg
            font-thin
            bg-black/40
          "
        >
          <a href="#about" className="hover:text-green-400 transition">
            About Me
          </a>

          <a
            href="/BinodBudhaResume.pdf"
            download
            className="hover:text-green-400 transition"
          >
            Resume
          </a>

          <a href="#connect" className="hover:text-green-400 transition">
            Let's Connect
          </a>
        </div>
      </div>

      {/* Hamburger (Mobile) */}
      <div className="relative min-[700px]:hidden">

        <div
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="ri-menu-line"></i>
        </div>

        {isOpen && (
          <div
            className="
              absolute right-0 top-full mt-4
              flex flex-col gap-3
              bg-black/80 backdrop-blur-3xl
              p-6 rounded-xl
              shadow-lg
              font-extralight text-sm
            "
          >
            <a href="#about" className="hover:text-green-400 transition">
              About Me
            </a>

            <a
              href="/BinodBudhaResume.pdf"
              download
              className="hover:text-green-400 transition"
            >
              Resume
            </a>

            <a href="#connect" className="hover:text-green-400 transition">
              Let's Connect
            </a>
          </div>
        )}

      </div>

    </div>
  )
}

export default Navbar
