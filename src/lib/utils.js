import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const parseFileName = (input)=>{
  return input.slice(0, input.length-8)
}

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};