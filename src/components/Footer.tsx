import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export function Footer() {
  return (
    <MaxWidthWrapper className="mt-9">
      <footer className="border py-12 px-1 lg:px-20 bg-zinc-100 rounded-t-lg flex flex-col gap-12">
        <div className="text-center">
          <h3 className="font-semibold lg:text-2xl">👋 Thanks for stopping by! Here is more of me if you are interested :&#41;</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="uppercase text-lg text-zinc-900/60 cursor-default">Pages</h3>
            <ul className="mt-3">
              <li><Link className="font-semibold text-md hover:underline" href={'/'}>Work</Link></li>
              <li><Link className="font-semibold text-md hover:underline" href={'/about'}>About</Link></li>
              <li><Link className="font-semibold text-md hover:underline" href={'/pdfs/resume.pdf'} target="_blank">Resume</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-lg text-zinc-900/60 cursor-default">Let&apos;s connect</h3>
            <ul className="mt-3">
              <li><Link className="font-semibold text-md hover:underline" href={'https://linkedin.com/in/herosnuciatelli/'} target="_blank">LinkedIn</Link></li>
              <li><Link className="font-semibold text-md hover:underline" href={'mailto:herosnuciatelli@gmail.com'} target="_blank">Email</Link></li>
            </ul>
          </div>

          <div className="flex flex-col mt-6 col-start-1 col-end-3 lg:mt-0 lg:col-start-3 lg:col-end-5">
            <span className="cursor-default lg:text-base text-sm">Made with love &copy; 2024 Heros Nuciatelli</span>
            <span className="text-blue-700 cursor-text lg:text-base text-sm">herosnuciatelli@gmail.com</span>
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  )
}