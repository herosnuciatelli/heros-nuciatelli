import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export function Footer() {
  return (
    <MaxWidthWrapper className="mt-9">
      <footer className="border border-zinc-500 py-12 px-3 lg:px-20 bg-zinc-900 text-zinc-50 rounded-t-lg flex flex-col gap-12 shadow-2xl">
        <div className="text-center">
          <h3 className="font-semibold lg:text-2xl">👋 Thanks for stopping by! Here is more of me if you are interested :&#41;</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="uppercase text-md text-zinc-300 cursor-default">Pages</h3>
            <ul className="mt-3">
              <li><Link className="text-md hover:text-zinc-50 text-zinc-300" href={'/'}>Work</Link></li>
              <li><Link className="text-md hover:text-zinc-50 text-zinc-300" href={'/about'}>About</Link></li>
              <li><Link className="text-md hover:text-zinc-50 text-zinc-300" href={'/pdfs/resume.pdf'} target="_blank">Resume</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-md text-zinc-300 cursor-default">Let&apos;s connect</h3>
            <ul className="mt-3">
              <li><Link className="text-md hover:text-zinc-50 text-zinc-300" href={'https://linkedin.com/in/herosnuciatelli/'} target="_blank">LinkedIn</Link></li>
              <li><Link className="text-md hover:text-zinc-50 text-zinc-300" href={'mailto:herosnuciatelli@gmail.com'} target="_blank">Email</Link></li>
            </ul>
          </div>

          <div className="flex text-center lg:text-left flex-col mt-6 col-start-1 col-end-3 lg:mt-0 lg:col-start-3 lg:col-end-5">
            <span className="cursor-default lg:text-base text-sm">Made with love &copy; 2024 Heros Nuciatelli</span>
            <span className="cursor-text lg:text-base text-sm bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent font-semibold">herosnuciatelli@gmail.com</span>
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  )
}