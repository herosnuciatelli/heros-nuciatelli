'use client'

import { MenuIcon, XIcon } from "lucide-react"
import React from "react"

export const Menu = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    };
  }, [isOpen]);
  
  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}> 
        { !isOpen ? <MenuIcon /> : <XIcon />}
      </div>
      {isOpen && (
        <div className="bg-red-500 fixed h-full w-full left-0 top-0 z-20 mt-[95px]"></div>
      )}
    </>
  )
}