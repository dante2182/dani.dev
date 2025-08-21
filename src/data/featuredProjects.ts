import type { iProjects } from '@/types/featuredProjects.types'

export const featuredProjects: iProjects[] = [
  {
    title: 'blinky',
    description:
      '🔗 A open-source URL shortener that helps you to shorten your URLs.',
    tags: ['Next.js', 'TailwindCSS', 'Prisma', 'Shadcn/ui'],
    url: 'https://blinky-sigma.vercel.app/',
    githubUrl: 'https://github.com/samfint/blinky',
    icon: 'https://blinky-sigma.vercel.app/_next/image?url=%2Flogo.png&w=96&q=75',
  },
  {
    title: 'vaultify',
    description:
      '📦 A open-source inventory management system that helps you to manage your inventory.',
    tags: ['React', 'TailwindCSS', 'Prisma', 'Express'],
    url: '',
    githubUrl: 'https://github.com/samfint/vaultify',
    icon: 'https://raw.githubusercontent.com/samfint/vaultify/ed97be04766044d74a0e744b167b6406a14e67a6/client/public/inventory.svg',
  },
  {
    title: 'Movie Clone',
    description: '🎬 A movie clone that helps you to watch movies.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: '',
    githubUrl: 'https://github.com/samfint/',
    icon: 'https://www.shutterstock.com/image-vector/film-clapper-3d-cartoon-icon-600nw-2239181291.jpg',
  },
]
