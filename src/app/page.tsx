import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Ario Budi Widagdo</h1>
        <p className="text-xl text-gray-600">Frontend Engineer</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="mailto:ariobwidagdo@gmail.com">
            <Button variant="outline"><Mail className="mr-2 h-4 w-4" /> Email</Button>
          </a>
          <a href="https://github.com/ariobwidagdo" target="_blank">
            <Button variant="outline"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          During the 3.5 years I worked as a software engineer, I focused on how to code well and efficiently. I am passionate about my work and pay attention to technological development.
        </p>
        <div className="mt-2 text-sm text-gray-500 flex items-center gap-2">
          <MapPin className="w-4 h-4" /> Lebak Sari 24B, Poltangan, Jakarta Selatan
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          {[
            "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Redux", "Next.js",
            "Jest.js", "React Native", "MaterialUI", "Axios", "Highcharts",
            "NPM", "Gitlab", "Terminal & VSCode"
          ].map((skill) => (
            <span key={skill} className="bg-gray-100 px-2 py-1 rounded-md">{skill}</span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-4">
              <h3 className="font-semibold">Associate Frontend Engineer - Packet Systems Indonesia (Crampas.ai)</h3>
              <p className="text-sm text-gray-500">Apr 2024 – May 2025</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                <li>Developed crampas.ai website using React.js & Next.js</li>
                <li>Built reusable, scalable components</li>
                <li>Optimized performance & ensured responsiveness</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <h3 className="font-semibold">Middle Frontend Developer - SALT / MyOrbit Telkomsel</h3>
              <p className="text-sm text-gray-500">Apr 2023 – Feb 2024</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                <li>Integrated MyOrbit CMS across web & Android</li>
                <li>Improved tracker features & UI design implementation</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <h3 className="font-semibold">Junior Frontend Developer - SALT / MyOrbit Telkomsel</h3>
              <p className="text-sm text-gray-500">Nov 2021 – Mar 2023</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                <li>Built UI with React Native & React.js</li>
                <li>Connected app with CMS dynamically</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <h3 className="font-semibold">Student Bootcamp - Flexia App</h3>
              <p className="text-sm text-gray-500">Jun 2021 – Oct 2021</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                <li>Built tutoring app using React Native & Firebase</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
