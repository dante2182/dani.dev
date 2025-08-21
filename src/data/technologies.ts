import type { Stack } from '@/types/featuredProjects.types'
import type { FC, SVGProps } from 'react'

import Nextjs from '@/icons/nextjs'
import React from '@/icons/reactjs'
import TailwindCSS from '@/icons/tailwindcss'
import Expressjs from '@/icons/express'
import Prisma from '@/icons/prisma'
import JavaScript from '@/icons/javascript'
import HTML5 from '@/icons/html'
import CSS from '@/icons/css'
import MongoDB from '@/icons/mongodb'
import shadcnui from '@/icons/shadcnui'
import PostgreSQL from '@/icons/postgresql'

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
    icon: TailwindCSS,
  },
  {
    stack: 'React',
    icon: React,
  },
  {
    stack: 'Shadcn/ui',
    icon: shadcnui,
  },
  {
    stack: 'MongoDB',
    icon: MongoDB,
  },
  {
    stack: 'PostgreSQL',
    icon: PostgreSQL,
  },
  {
    stack: 'Express',
    icon: Expressjs,
  },
  {
    stack: 'Prisma',
    icon: Prisma,
  },
  {
    stack: 'HTML',
    icon: HTML5,
  },
  {
    stack: 'CSS',
    icon: CSS,
  },
  {
    stack: 'JavaScript',
    icon: JavaScript,
  },
]
