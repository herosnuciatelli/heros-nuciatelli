import { Footer } from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function About() {
  return (
    <>
      <main>
        <MaxWidthWrapper>
          <div className="grid grid-cols-2 py-20">
            <div>
              <h2 className="font-semibold text-2xl">Get to know more <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">about Heros</span></h2>
              <div className="flex flex-col gap-3 mt-6">
                <p className="text-lg">I have recently been attending the computer technician course at Colégio Cruzeiro do Sul and working as a freelancer and developing my own business.</p>
                <p className="text-lg">I am a motivated and enthusiastic web developer with a passion for creating solutions. I leverage my repertoire in strong logic and technical skills to create innovative and creative solutions.</p>
                <p className="text-lg">I have experience in developing websites and platforms. With persistence, a positive attitude, and a growth-oriented mindset, I am constantly seeking opportunities to expand my knowledge and skills as a web developer.</p>
              </div>
            </div>
            <div>
              <h2>imagem</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-y-9">
            <div>
              <h3 className="font-semibold">🖥️ Areas of expertise</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>... and more!</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">👨🏻‍💻 Currently learning</h3>
              <ul>
                <li>Next.js 14</li>
                <li>Unitary tests</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">☕  Personal Interests</h3>
              <ul>
                  <li>Coffee</li>
                  <li>Traveling</li>
                  <li>Workout</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">💡 Current projects</h3>
              <ul>
                <li>Company Productivity Platform</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Aside from webdeveloping</h3>
            <p>I am interested in personal development and cybersecurity</p>
          </div>
        </MaxWidthWrapper>
      </main>

      <Footer />
    </>

  )
}