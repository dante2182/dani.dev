export type Stack =
  | 'Next.js'
  | 'TailwindCSS'
  | 'React'
  | 'Prisma'
  | 'Node.js'
  | 'Express'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'Shadcn/ui'
  | 'TypeScript'
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
