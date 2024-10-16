'use client'

import { Footer } from '@/components/Footer'
import { Icons } from '@/components/Icons'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { Carrousel } from '@/components/Carrousel'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <main>
        <section className="relative overflow-hidden min-h-[600px] grid place-items-center border-b border-b-zinc-600/20">
          <Icons.bgSquare className="absolute hidden lg:block lg:top-0 lg:left-0" />
          <Icons.bgTriangle className="absolute hidden lg:block -bottom-1/4 right-20" />
          <Icons.bgCircle className="absolute hidden lg:block lg:top-0 lg:right-0" />

          <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <div className="text-center z-10 relative">
            <h3 className="text-2xl lg:text-4xl font-semibold">
              Hi, I&apos;m Heros
            </h3>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl lg:text-[80px] font-semibold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent"
            >
              Web Developer
            </motion.h2>
            <div className="my-6 flex justify-center">
              <Carrousel />
            </div>
            <Link
              href={'https://github.com/herosnuciatelli?tab=repositories'}
              target="_blank"
            >
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className={buttonVariants({ variant: 'default' })}
              >
                My Projects
              </motion.button>
            </Link>
          </div>
        </section>
        <MaxWidthWrapper className="py-12">
          <section>
            <div className="text-center">
              <h2 className="font-semibold text-2xl">
                Profissional Experience
              </h2>
              <p className="text-zinc-900/60">
                Website avaliable upon request.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-3 py-12">
              <Link href={'https://diasclinic.com/'} target="_blank">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="border rounded-lg bg-zinc-50 overflow-hidden group"
                >
                  <div className="cursor-pointer h-60 overflow-hidden">
                    <div className="cursor-pointer min-h-60 bg-[url('/images/imac-screen-mockup.png')] group-hover:scale-110 scale-125 w-full rounded-t-lg bg-center bg-cover transition-all"></div>
                  </div>
                  <div className="my-9 flex flex-col gap-2 px-2">
                    <h2 className="font-semibold text-lg lg:text-xl cursor-pointer group">
                      <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text group-hover:text-transparent transition-all">
                        Top-rated clinic in Notting Hill{' '}
                      </span>
                      🔒
                    </h2>

                    <p className="text-zinc-900/60">Web Developer</p>
                    <p>Launched a website that enhanced customer metrics.</p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </section>
          <section className="py-12">
            <div className="text-center">
              <h2 className="font-semibold text-2xl">Case Study</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-3 py-12">
              <div className="cursor-pointer group">
                <Link href={'/case-study/polyhedra'}>
                  <div className="cursor-pointer min-h-60 bg-[url('/images/polyhedra-mockup.png')] border rounded bg-center bg-cover"></div>
                  <div className="mt-6 flex flex-col gap-2">
                    <h2 className="font-semibold text-lg lg:text-xl bg-gradient-to-r cursor-pointer from-blue-600 to-blue-900 bg-clip-text group-hover:text-transparent transition-all">
                      Study of Polyhedron
                    </h2>
                    <p className="text-zinc-900/60">
                      UI/UX Design, Web Developer, Case Study
                    </p>
                    <p>
                      Created a unique study of polyhedron experience through 3D
                      models on a website
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </MaxWidthWrapper>
      </main>
      <Footer />
    </div>
  )
}
