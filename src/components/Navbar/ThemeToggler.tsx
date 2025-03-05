import { Moon, Sun } from 'lucide-react'
import React from 'react'

const ThemeToggler = () => {
  return (
    <section className='flex items-center'>
        <Sun strokeWidth={1.5} />
        <Moon strokeWidth={1.5} />
    </section>

  )
}

export default ThemeToggler
