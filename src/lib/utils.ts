import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const checkColor = (c: string) => {
  switch (c) {
    case 'black':
      return 'bg-black'
    case 'white':
      return 'bg-white'
    case 'electro':
      return 'bg-lime-400'
    case 'gravity':
      return 'bg-violet-400'
    case 'noether':
      return 'bg-rose-400'
    default:
      console.log(`${c}`)
  }
}
