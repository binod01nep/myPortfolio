import React from 'react'

const Certificates = () => {

  const certificates = [
    {
      id: 1,
      title: "Kaggle Machine Learning Certificate",
      image: "/Kaggle_certificate.png"
    },
    {
      id: 2,
      title: "Kaggle Python Certificate",
      image: "/python.png"
    }
  ];

  return (
    <section
      className="w-full bg-black text-white dotted-bg
                 px-4 sm:px-8 md:px-16 py-16"
    >

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono mb-12">
        Certificates
      </h2>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        gap-8
      ">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="
              bg-gray-900
              rounded-xl
              border border-white/10
              p-4
              hover:shadow-lg
              hover:shadow-green-900/20
              transition-all duration-300
            "
          >
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="
                  w-full
                  rounded-lg
                  border border-white/20
                  hover:scale-105
                  transition duration-300
                "
              />
            </a>

            <p className="mt-4 text-sm sm:text-base text-white/80 font-mono">
              {cert.title}
            </p>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Certificates
