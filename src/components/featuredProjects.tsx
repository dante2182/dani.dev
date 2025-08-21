import { featuredProjects } from '@/data/featuredProjects'
import { ProjectCard } from './featuredProjectCard'

export default function FeaturedProjects() {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            githubUrl={project.githubUrl}
            icon={project.icon}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  )
}
