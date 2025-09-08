import { technologies } from '@/data/technologies'
import type { iProjects } from '@/types/featuredProjects.types'

import Github from '@/icons/github'
import Arrow from '@/icons/arrow'
import { useSpotlight } from '@/utils/useSpotlight'

export function ProjectCard({
  title,
  description,
  url,
  githubUrl,
  icon,
  tags,
}: iProjects) {
  const cardRef = useSpotlight<HTMLDivElement>()

  return (
    <div
      ref={cardRef}
      className="p-4 w-full rounded-2xl border dark:border-neutral-800 spotlight spotlight-border transition-all duration-300 hover:border-neutral-700"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={icon} alt={title} className="rounded-sm" />
          </div>
          <div className="ml-4 hover:underline">
            <h3 className="text-xl font-bold">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {title}
                <Arrow width={16} height={16} />
              </a>
            </h3>
          </div>
        </div>
        <div className="flex items-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-neutral-400 dark:hover:text-white duration-250"
          >
            <Github width={23} height={23} />
          </a>
        </div>
      </div>
      <p className="mt-4 text-sm dark:text-neutral-400">{description}</p>
      <div className="mt-4 flex items-center space-x-2">
        {tags.map((tag) => {
          const tech = technologies.find((t) => t.stack === tag)
          if (!tech) return null
          const Icon = tech.icon
          return (
            <div
              key={tag}
              className="flex items-center space-x-1 border border-neutral-700/40 dark:bg-neutral-800 px-2 py-1 rounded-lg dark:text-neutral-400"
            >
              <Icon width={14} height={14} />
              <span className="dark:text-neutral-400 font-medium text-sm">
                {tag}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
