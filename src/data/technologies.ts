import type { Stack } from '@/types/featuredProjects.types'
import type { FC, SVGProps } from 'react'

import { Nextjs } from '@/icons/nextjs'

interface Technologies {
  stack: Stack
  icon: FC<SVGProps<SVGSVGElement>>
}

export const technologies: Technologies[] = [
  {
    stack: 'Next.js',
    icon: Nextjs,
  },
  {
    stack: 'TailwindCSS',
    icon: Nextjs,
  },
  {
    stack: 'React',
    icon: Nextjs,
  },
]
