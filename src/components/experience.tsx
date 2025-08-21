import { experiences } from '@/data/experience'
import Arrow from '@/icons/arrow'

export default function Experience() {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-white mb-8">Experience</h2>
      <div className="relative border-l border-gray-700 pl-8">
        {experiences.map((experience) => (
          <div
            key={experience.role}
            className="relative mb-12 flex items-center"
          >
            {/* Círculo centrado verticalmente al lado del rol */}
            <div className="absolute -left-10 w-4 h-4 bg-gray-700 rounded-full border-2 border-gray-900"></div>

            {/* Contenido de la experiencia */}
            <div>
              <h3 className="text-xl font-bold text-white">
                {experience.role}
              </h3>
              <a
                href={experience.linkCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold flex items-center gap-2 text-gray-400 mt-2 hover:text-white transition-colors duration-250"
              >
                {experience.company}
                <Arrow width={16} height={16} />
              </a>
              <div className="flex gap-2 text-sm text-gray-400 mt-1">
                <span>{experience.startDate}</span>
                <span>-</span>
                <span>{experience.endDate}</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {experience.aboutRole}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
