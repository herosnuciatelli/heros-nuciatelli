'use client'

import React, { ReactNode } from "react"
import { Button } from "./button"
import { XIcon } from "lucide-react"

export const Modal:React.FC<Omit<ModalProps, 'setIsOpen' | 'isOpen'>> = ({children}) => {
  const [IsOpen, setIsOpen] = React.useState<boolean>(false)
  React.useEffect(() => {
    if (!IsOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'
    };
  }, [IsOpen]);
  return (
    <>    
      <ModalTrigger setIsOpen={setIsOpen}>
        {children}
      </ModalTrigger>
      {IsOpen && (
        <div className="grid place-items-center fixed inset-0 cursor-default">
          <div className="fixed inset-0 bg-zinc-900/40 z-10" onClick={() => setIsOpen(false)}></div>
            <div className="w-full bg-zinc-50 max-w-lg py-5 px-8 rounded-md min-h-52 absolute z-20">
              <div className="flex justify-end">
                <Button variant="ghost" onClick={() => setIsOpen(false)}><XIcon className="size-4" /></Button>
              </div>
              
              <h2 className="py-3 text-lg font-semibold">To view this site, send me an email requesting it. 👀</h2>
              <label className="cursor-text">herosnuciatelli@gmail.com</label>
            </div>
        </div>
      )}
    </>
  )
}

type ModalProps = {
  children: ReactNode
  IsOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const ModalTrigger:React.FC<ModalProps> = ({ children, setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen(true)}>
      {children}
    </div>
  )
}