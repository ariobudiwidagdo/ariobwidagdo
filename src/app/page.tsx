import React from 'react'

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript',
  'Axios', 'Redux', 'Rest API', 'Highcharts', 'MaterialUI',
  'Gitlab', 'NPM', 'Terminal & VSCode', 'Next.js', 'Jest.js', 'React Native'
]

const experiences = [
  {
    role: 'Associate Frontend Engineer',
    company: 'Packet Systems Indonesia - Crampas.ai',
    period: 'Apr 2024 – May 2025',
    description: [
      'Developed crampas.ai website using React.js and Next.js',
      'Built reusable components and implemented state management',
      'Integrated APIs and ensured cross-browser compatibility',
      'Optimized performance and maintained team collaboration',
    ],
    stack: 'Jest.js, React-Native, Axios, Redux, React.js, Highcharts, Typescript, Material UI, Next.js',
  },
  {
    role: 'Middle Frontend Developer',
    company: 'SALT - PT.Ako Media Asia - MyOrbit Telkomsel',
    period: 'Apr 2023 – Feb 2024',
    description: [
      'Designed Redux pattern and integrated UI for MyOrbit Web',
      'Adapted design for Android app using React Native',
      'Improved tracker features and maintained cross-platform consistency',
    ],
    stack: 'Jest.js, React-Native, Axios, Redux, React.js, Highcharts, Typescript',
  },
  {
    role: 'Junior Frontend Developer',
    company: 'SALT - PT.Ako Media Asia - MyOrbit Telkomsel',
    period: 'Nov 2021 – Mar 2023',
    description: [
      'Sliced and integrated UI designs for MyOrbit CMS',
      'Connected app to CMS for dynamic content across platforms',
      'Implemented React Hooks and tested features',
    ],
    stack: 'Jest.js, React-Native, Axios, Redux, React.js',
  },
  {
    role: 'Bootcamp Student Mobile Hybrid Development',
    company: 'Flexia App',
    period: 'June 2021 – Oct 2021',
    description: [
      'Learned React Native mobile development with Firebase',
      'Built tutoring service app with authentication and notifications',
    ],
    stack: 'React Native, Firebase',
  }
]

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <h1 className="text-5xl font-extrabold mb-3 text-blue-900">Ario Budi Widagdo</h1>
        <p className="text-2xl font-semibold text-blue-700 mb-6">Frontend Engineer</p>
        <p className="max-w-3xl text-gray-700 leading-relaxed text-lg">
          During the 3.5 years I worked as a software engineer, I focused on coding well and efficiently,
          while being passionate about my work and always paying attention to technological developments.
        </p>
        <div className="mt-8 space-y-1 text-md text-gray-600 font-medium max-w-md">
          <p>📞 0822 3346 4883</p>
          <p>📧 ariobwidagdo@gmail.com</p>
          <p>📍 Lebak Sari 24B, Poltangan, Tanjung Barat, Jakarta Selatan</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-5 border-b-4 border-blue-600 inline-block pb-2 text-blue-800">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map(skill => (
            <li
              key={skill}
              className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-200 transition cursor-default select-none"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-blue-600 inline-block pb-2 text-blue-800">
          Experience
        </h2>
        <div className="space-y-10">
          {experiences.map(({ role, company, period, description, stack }) => (
            <article
              key={role + company}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-blue-900">{role}</h3>
              <p className="italic text-gray-600 text-sm mb-4">
                {company} &middot; {period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-gray-500 font-medium">
                <strong>Stack:</strong> {stack}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
