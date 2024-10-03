import { Footer } from "@/components/Footer";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "@/components/ui/dialog";

export default function Home() {
  return (
    <div>
      <main>
        <section className="relative overflow-hidden min-h-[600px] grid place-items-center border-b border-b-zinc-600/20">
          <Icons.bgSquare className="absolute top-0 left-0" />
          <Icons.bgTriangle className="absolute -bottom-1/4 right-20" />
          <Icons.bgCircle className="absolute top-0 right-0" />

          <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
          <div className="text-center z-10 relative">
              <h3 className="text-2xl font-semibold">Hi, I&apos;m Heros</h3>
              <h2 className="text-6xl font-semibold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">Web Developer</h2>
              <div className="my-6 grid grid-cols-6 grid-rows-2 justify-center gap-1">
                {['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Docker', 'Node.js', 'Figma', 'Three.js', 'SQL'].map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                ))}
              </div>
              <Link href={'https://github.com/herosnuciatelli?tab=repositories'} target="_blank"><Button>My Projects</Button></Link>
          </div>
        </section>
        <MaxWidthWrapper className="py-12">
          <section>
              <div className="text-center">
                <h2 className="font-semibold text-2xl">Profissional Experience</h2>
                <p className="text-zinc-900/60">Website avaliable upon request.</p>
              </div>
              <div className="grid grid-cols-3 gap-3 py-12">
                <div>
                  <div className="cursor-pointer">
                    <Modal><Image src="/images/imac-screen-mockup.png" className="w-full rounded" width={300} height={100} alt="clinic website" /></Modal>
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <Modal>
                      <h2 className="font-semibold text-xl cursor-pointer group"><span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text group-hover:text-transparent transition-all">Top-rated clinic in Notting Hill </span>🔒</h2>
                    </Modal>
                    <p className="text-zinc-900/60">Web Developer</p>
                    <p>Launched a website that enhanced customer metrics.</p>
                  </div>
                </div>
              </div>
          </section>
          <section className="py-12">
              <div className="text-center">
                <h2 className="font-semibold text-2xl">Case Study</h2>
              </div>
              <div className="grid grid-cols-3 gap-3 py-12">
                
                <div className="cursor-pointer group">
                  <Link href={'/case-study/polyhedra'}>
                    <div className="cursor-pointer min-h-60 bg-[url('/images/polyhedra-mockup.png')] border rounded bg-center bg-cover"></div>
                      <div className="mt-6 flex flex-col gap-2">
                        <h2 className="font-semibold text-xl bg-gradient-to-r cursor-pointer from-blue-600 to-blue-900 bg-clip-text group-hover:text-transparent transition-all">Study of Polyhedron</h2>
                        <p className="text-zinc-900/60">UI/UX Design, Web Developer, Case Study</p>
                        <p>Created a unique study of polyhedron experience through 3D models on a website</p>
                      </div>
                  </Link>
                </div>
              </div>
          </section>
        </MaxWidthWrapper>
      </main>
      <Footer />
    </div>
  );
}
