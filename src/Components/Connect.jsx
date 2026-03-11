import React from 'react'

const Connect = () => {
  return (
    <section
      id="connect"
      className="
        w-full bg-black text-white dotted-bg
        px-4 sm:px-8 md:px-16 py-5
        font-mono

      "
    >

      <h1 className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8">
        Get In Touch
      </h1>

      <div className="
        flex
        justify-center sm:justify-start
        gap-8
        text-3xl sm:text-4xl
      ">

        <a
          href="https://github.com/binod01nep"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          <i className="ri-github-fill"></i>
        </a>

        <a
          href="mailto:bcb4314@gmail.com"
          className="hover:text-green-400 transition"
        >
          <i className="ri-mail-fill"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/binod-budha-7691773a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          <i className="ri-linkedin-box-fill"></i>
        </a>

      </div>

    </section>
  )
}

export default Connect
