export type Stack =
  | 'Next.js'
  | 'TailwindCSS'
  | 'React'
  | 'Prisma'
  | 'Express'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'Shadcn/ui'
  | 'JavaScript'
  | 'HTML'
  | 'CSS'

export interface iProjects {
  title: string
  description: string
  tags: Stack[]
  url?: string
  githubUrl?: string
  icon?: string
  latest?: boolean
  updated?: boolean
}
