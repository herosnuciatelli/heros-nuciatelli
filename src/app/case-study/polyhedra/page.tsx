import { Footer } from '@/components/Footer'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

const processSteps = [
  'Understand',
  'Research',
  'Analyze',
  'Design',
  'Learning',
  'Development',
  'Presentation',
]

export default function CaseStudyPolyhedra() {
  const projectDetails = [
    {
      title: 'My role',
      content: 'Web Developer & UI/UX Designer',
    },
    {
      title: 'Project',
      content: 'Personal Project',
    },
    {
      title: 'Timeline',
      content: '40 Days (2023)',
    },
    {
      title: 'Tools',
      content:
        'React, JavaScript, React-Three-Fiber, GSAP, Baffle, Blender, Git, GitHub, CSS, Figma, Visual Studio Code',
    },
  ]

  return (
    <>
      <div className="bg-[#f9f9f9] min-h-96">
        <MaxWidthWrapper className="flex justify-center h-96 items-center">
          <Image
            src="/images/facebook-post-mockup.png"
            className="h-96 w-max mx-auto hidden lg:block"
            alt="iphones with my project"
            width={1000}
            height={100}
          />
          <Image
            src="/images/iphone-multiple-screens-mockup.png"
            className="lg:h-96 w-max mx-auto"
            alt="iphones with my project"
            width={1000}
            height={100}
          />
        </MaxWidthWrapper>
      </div>

      <section className="py-6">
        <MaxWidthWrapper>
          <div>
            <h2 className="text-2xl font-semibold">Study of Polyhedron</h2>
            <p className="py-3 text-zinc-900/80">
              An engaging website that provides support to students from Colégio
              Cruzeiro do Sul in understanding the clear and visual concepts of
              polyhedra. This vibrant and dynamic resource is an essential tool
              to enhance students&apos; comprehension, empowering them to fully
              master this topic.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 py-3">
            {projectDetails.map((detail) => (
              <div key={detail.title}>
                <h3 className="text-lg">{detail.title}</h3>
                <p className="text-zinc-900/80 py-1">{detail.content}</p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-zinc-50 py-6">
        <MaxWidthWrapper>
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-blue-600">Overview</h2>
            <h3 className="text-2xl font-semibold">Prompt</h3>
            <p className="my-3 text-zinc-900/90">
              Colégio Cruzeiro do Sul encourages students to develop their
              communication skills through presentations. Previously limited to
              slides, my innovative solutions have transformed this process. By
              creating an interactive 3D website, I provided a visual and
              intuitive way to learn about polyhedrons. This approach not only
              revitalized the presentation format but also became a central
              topic in the institution&apos;s annual planning discussions,
              highlighting new educational possibilities.
            </p>
          </div>

          <h3 className="text-2xl font-semibold">Development process</h3>
          <div className="py-6 flex flex-wrap justify-between items-center gap-1 w-full">
            {processSteps.map((process) => (
              <>
                <span className="bg-blue-700 border h-10 flex items-center border-blue-600 px-3 py-1.5 rounded text-zinc-50 font-semibold text-xs">
                  {process}
                </span>
                {process.toLowerCase() !== 'presentation' && (
                  <span>
                    <ArrowRightIcon className="size-4" />
                  </span>
                )}
              </>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="py-6">
        <MaxWidthWrapper>
          <h3 className="text-2xl font-semibold">Initial thinking</h3>
          <div className="py-3 grid gap-3 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-lg">Target Users</h4>
              <ul>
                <li className="text-sm">
                  Students at Colégio Cruzeiro do Sul, Students with less
                  affinity for mathematics who need help dealing with
                  polyhedrons
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Research Methods</h4>
              <ul>
                <li className="text-sm">Research online</li>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <Footer />
    </>
  )
}
