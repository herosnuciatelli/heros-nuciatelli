import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'rounded text-sm font-medium px-4 py-1.5 focus:ring-3 focus-ring focus:ring-rose-500',
  variants: {
    variant: {
      default: 'bg-zinc-900 text-zinc-50',
      outline:
        'border border-zinc-900 bg-none hover:bg-zinc-900 hover:text-zinc-50 transition-all',
      ghost: 'hover:bg-zinc-100',
      secondary: 'bg-zinc-100',
    },
    size: {
      default: 'py-2 px-4',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
})

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {}

export function Button({ variant, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant })} {...props} />
}
