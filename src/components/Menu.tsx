'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import React from 'react'
import { buttonVariants } from './ui/button'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export const Menu = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const pathname = usePathname()

  React.useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <MenuIcon /> : <XIcon />}
      </div>
      {isOpen && (
        <div className="bg-white border-t fixed h-full w-full left-0 top-0 z-20 mt-[95px]">
          <MaxWidthWrapper>
            <nav className="py-3">
              <ul className="flex flex-col gap-3">
                <Link href={'/'} onClick={() => setIsOpen(false)}>
                  <li
                    className={cn(buttonVariants({ variant: 'secondary' }), {
                      'bg-zinc-900 text-zinc-50': pathname === '/',
                    })}
                  >
                    Work
                  </li>
                </Link>
                <Link href={'/about'} onClick={() => setIsOpen(false)}>
                  <li
                    className={cn(buttonVariants({ variant: 'secondary' }), {
                      'bg-zinc-900 text-zinc-50': pathname === '/about',
                    })}
                  >
                    About
                  </li>
                </Link>
                <Link
                  href={'/pdfs/resume.pdf'}
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                >
                  <li className={cn(buttonVariants({ variant: 'secondary' }))}>
                    Resume
                  </li>
                </Link>
              </ul>
            </nav>
          </MaxWidthWrapper>
        </div>
      )}
    </>
  )
}
