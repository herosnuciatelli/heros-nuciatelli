import { ComponentProps } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const variantProps = tv({
  base: 'rounded text-xs font-medium py-1.5 w-full mx-auto',
  variants: {
    variant: {
      default: 'border border-zinc-600 text-zinc-600 font-semibold hover:bg-blue-50 bg-zinc-50',
    },
    size: {
      default: 'px-2'
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  }
})

export type BadgeProps = ComponentProps<'div'> &
  VariantProps<typeof variantProps> & {
    // future propss
  }

export function Badge({variant ,...props}:BadgeProps) {
  return (
    <div
      className={variantProps({variant})}
      {...props}
    />
  )
}