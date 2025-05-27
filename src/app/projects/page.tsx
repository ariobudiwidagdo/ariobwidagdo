import React from 'react'

const projects = [
  {
    title: 'Crampas.ai Website',
    description: 'AI-driven business information management web app built with React.js and Next.js.',
    link: 'https://crampas.ai',
  },
  {
    title: 'MyOrbit App',
    description: 'Cross-platform app for Telkomsel’s MyOrbit service using React Native and React.js.',
    link: 'https://myorbit.telkomsel.com',
  },
  {
    title: 'Private Tutoring Service App',
    description: 'React Native app with Firebase for booking tutors and authentication.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-10 text-blue-900 border-b-4 border-blue-600 inline-block pb-3">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(({ title, description, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-3 text-blue-800">{title}</h2>
            <p className="text-gray-700 text-lg">{description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
