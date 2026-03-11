import React from 'react'

const About = () => {

  const skills = [
    { title: "Languages", items: ["Java", "C", "Python"] },
    { title: "Database", items: ["MongoDB", "MySQL"] },
    { title: "Frontend", items: ["React JS", "Tailwind CSS"] },
    { title: "Backend", items: ["Node JS", "Express JS"] },
    { title: "Tools", items: ["Git", "GitHub", "n8n","postman"] },
    { title: "Cloud", items: ["AWS", "Vercel"] }
  ]

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white mt-6 
                 bg-radial from-green-950 to-black dotted-bg
                 px-4 sm:px-8 md:px-16 py-16"
    >

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-4xl md:text-5xl font-thin text-center leading-tight">

  <span className="block md:inline">
    Let you know
  </span>{" "}

  <span className="block md:inline text-green-500 text-6xl sm:text-6xl md:text-6xl mx-1">
    More
  </span>{" "}

  <span className="block md:inline">
    About Me
  </span>

</h1>


      {/* Sub Heading */}
      <h2 className="font-mono mt-16 text-2xl sm:text-3xl md:text-4xl">
        Skills <span className="text-green-500">I</span> Have
      </h2>

      {/* Skills Grid */}
      <div className="
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-3
        gap-6
        font-mono
      ">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-black
              border border-white/10
              rounded-xl
              p-5
              text-gray-400
              hover:shadow-xl
              hover:shadow-green-900/20
              transition-all duration-300
            "
          >

            {/* Top circles */}
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-600"></div>
              <div className="h-2 w-2 rounded-full bg-red-600"></div>
            </div>

            {/* Title */}
            <h3 className="text-white mt-4 text-lg sm:text-xl">
              {skill.title}
            </h3>

            {/* Skill List */}
            <ul className="list-disc pl-6 mt-3 space-y-1 text-sm sm:text-base">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </section>
  )
}

export default About
