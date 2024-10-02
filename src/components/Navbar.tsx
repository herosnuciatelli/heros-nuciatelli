import Link from "next/link"
import { Icons } from "./Icons"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { NavLinks } from "./NavLinks"
import { Button } from "./ui/button"

export const Navbar = () => {
  return (
    <div className=" h-24 bg-background px-5 md:px-0 lg:px-5 border-b border-b-zinc-600/20">
    <header className="relative h-full">
      <MaxWidthWrapper className="h-full">
        <div className="flex h-full items-center justify-center relative">
          <div className="flex gap-6 items-center">
            <Icons.logo className="size-10 absolute left-0" />
            <NavLinks />
          </div>
          <div className="flex gap-9 items-center absolute right-0">
            <Link href={'mailto:herosnuciatelli@gmail.com'}>
              <Button variant="outline">Contact Me</Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  </div>
  )
}