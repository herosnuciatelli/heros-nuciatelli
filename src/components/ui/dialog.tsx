'use client'

import React, { ReactNode } from "react"
import { Button } from "./button"

export const Modal:React.FC<Omit<ModalProps, 'setIsOpen' | 'isOpen'>> = ({children}) => {
  const [IsOpen, setIsOpen] = React.useState<boolean>(false)
  
  return (
    <>    
      <ModalTrigger setIsOpen={setIsOpen}>
        {children}
      </ModalTrigger>
      {IsOpen && (
        <>
          <div className="fixed inset-0 bg-zinc-900/40 z-10"></div>
          <div className="fixed inset-0 place-items-center grid z-20">
            <div className="w-full bg-zinc-50 max-w-md py-10 px-8 rounded-md min-h-52">
              <h2>HELLO WORLD</h2>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </div>
        </>
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
    <div onClick={() => setIsOpen(true)} className="w-max h-max">
      {children}
    </div>
  )
}