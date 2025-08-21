import X from '@/icons/x.tsx'
import Linkedin from '@/icons/linkedin.tsx'
import GitHub from '@/icons/github.tsx'
import Instagram from '@/icons/instagram.tsx'

export default function Header() {
  const SocialICons = [
    {
      name: 'Github',
      url: 'https://github.com/samfint',
      icon: GitHub,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/dani218002',
      icon: X,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dantesamuelrodriguez',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dante-rodriguez-chambi/',
      icon: Linkedin,
    },
  ]

  return (
    <div className="backdrop-blur-sm sticky top-0 z-10">
      <div className="container max-w-4xl flex-1 items-center justify-center mx-auto">
        <nav className="flex justify-between items-center py-6">
          <a
            href="/"
            className="text-gray-400 flex items-center text-2xl font-bold hover:text-white duration-250"
          >
            <span>dante.dev</span>
          </a>
          <div className="flex gap-4 items-center">
            {SocialICons.map((social) => (
              <div
                key={social.name}
                className="hover:bg-neutral-500 rounded-sm p-1 cursor-pointer dark:hover:bg-neutral-700 dark:text-gray-400 hover:text-white duration-100"
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-2xl"
                >
                  <social.icon width={24} height={24} />
                </a>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
