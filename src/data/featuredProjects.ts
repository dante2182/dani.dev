import type { iProjects } from '@/types/featuredProjects.types'

export const featuredProjects: iProjects[] = [
  {
    title: 'blinky',
    description:
      '🔗 A open-source URL shortener that helps you to shorten your URLs.',
    tags: ['Next.js', 'TailwindCSS', 'Prisma', 'Shadcn/ui'],
    url: 'https://blinky.vercel.app',
    githubUrl: 'https://github.com/Dante-007/blinky',
    icon: 'https://blinky-sigma.vercel.app/_next/image?url=%2Flogo.png&w=96&q=75',
    latest: true,
    updated: true,
  },
  {
    title: 'vaultify',
    description:
      '📦 A open-source inventory management system that helps you to manage your inventory.',
    tags: ['React', 'TailwindCSS', 'Prisma', 'Node.js', 'Express'],
    url: 'https://github.com/samfint/vaultify',
    githubUrl: 'https://github.com/samfint/vaultify',
    icon: 'https://blinky-sigma.vercel.app/_next/image?url=%2Flogo.png&w=96&q=75',
  },
  {
    title: 'Movie Clone',
    description: '🎬 A movie clone that helps you to watch movies.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/samfint/vaultify',
    githubUrl: 'https://github.com/samfint/vaultify',
    icon: 'https://blinky-sigma.vercel.app/_next/image?url=%2Flogo.png&w=96&q=75',
  },
]
