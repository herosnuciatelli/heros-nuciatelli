import Link from 'next/link'
import { Icons } from './Icons'
import MaxWidthWrapper from './MaxWidthWrapper'
import { NavLinks } from './NavLinks'
import { Button } from './ui/button'
import { Menu } from './Menu'

export const Navbar = () => {
  return (
    <div className=" h-24 bg-background px-5 md:px-0 lg:px-5 border-b border-b-zinc-600/20">
      <header className="relative h-full">
        <MaxWidthWrapper className="h-full">
          <div className="flex h-full items-center justify-between lg:justify-center relative">
            <div className="flex gap-6 items-center">
              <Link href={'/'} className="absolute left-0">
                <Icons.logo className="size-10" />
              </Link>
              <div className="hidden lg:block">
                <NavLinks />
              </div>
            </div>
            <div className="gap-9 items-center absolute right-0 hidden lg:flex">
              <Link href={'mailto:herosnuciatelli@gmail.com'}>
                <Button variant="outline">Contact Me</Button>
              </Link>
            </div>
            <div className="lg:hidden">
              <Menu />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}
