import React from 'react'

const Home = () => {
  return (
    <div id='home' className='
      text-white font-mono
  px-6 md:px-8
  flex flex-col-reverse md:flex-row
  justify-start
  items-center
  gap-6 md:gap-20
  dotted-bg
  pt-35
    '>

      {/* Left Section */}
      <div className='
        w-full md:w-1/2
        text-center md:text-left
        text-xl sm:text-3xl md:text-3xl
      '>
        <h1>
          Hello <span className='text-red-500'>!</span>
        </h1>

        <h2 className='mt-2'>
          I am <span className='text-green-500'>BINOD BUDHA</span>
          <span className='text-red-500'> |</span>
        </h2>

        <h2 className='text-gray-500 text-sm sm:text-base md:text-xl mt-4'>
          Aspiring Computer Science Engineer
        </h2>

        <h2 className='text-gray-600 text-sm sm:text-base md:text-lg'>
          Pandit Deendayal Energy University
        </h2>

        <h3 className='text-gray-700 text-xs sm:text-sm md:text-base'>
          Gandhinagar, Gujarat
        </h3>

        <div className='
          mt-6
          px-6 py-3
          bg-gray-900
          rounded-full
          inline-block
          text-xs sm:text-sm
          text-gray-300
        '>
          Learning is better when we feel it.
        </div>
      </div>

      {/* Right Image */}
      <div id='home' className='
        h-56 w-56
        sm:h-72 sm:w-72
        md:h-96 md:w-96
        rounded-full
        overflow-hidden
      '>
        <img 
          src="/image.png"
          alt="profile"
          className='w-full h-full object-cover'
        />
      </div>

    </div>
  )
}

export default Home
