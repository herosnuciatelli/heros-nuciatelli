'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavLinks = () => {
  const pathname = usePathname()

  return (
    <ul className="flex gap-12">
      <li
        className={cn('text-zinc-500 hover:text-zinc-900 cursor-pointer', {
          'text-zinc-900': pathname === '/',
        })}
      >
        <Link href={'/'}>Work</Link>
      </li>
      <li
        className={cn('text-zinc-500 hover:text-zinc-900 cursor-pointer', {
          'text-zinc-900': pathname === '/about',
        })}
      >
        <Link href={'/about'}>About</Link>
      </li>
      <li className={cn('text-zinc-500 hover:text-zinc-900 cursor-pointer')}>
        <Link href={'/pdfs/resume.pdf'} target="_blank">
          Resume
        </Link>
      </li>
    </ul>
  )
}
