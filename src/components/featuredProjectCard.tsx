import { featuredProjects } from '@/data/featuredProjects'

export default function FeaturedProjectCard() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {featuredProjects.map((project) => (
        <div key={project.title} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={project.icon} alt="" />
            </div>
            <div className="ml-2">
              <h3 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h3>
            </div>
          </div>
          <p className="mt-4 text-gray-600">{project.description}</p>
          <div className="mt-4 flex items-center space-x-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
