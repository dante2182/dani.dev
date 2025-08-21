import X from '@/icons/x.tsx'
import Github from '@/icons/github.tsx'
import Linkedin from '@/icons/linkedin.tsx'

export default function Header() {
  const SocialICons = [
    {
      name: 'LinkedIn',
      url: '',
      icon: Linkedin,
    },
    {
      name: 'Github',
      url: '',
      icon: Github,
    },
    {
      name: 'Twitter',
      url: '',
      icon: X,
    },
  ]

  return (
    <nav className="flex justify-between items-center px-10">
      <a href="/" className="">
        <span>dante.dev</span>
      </a>
      <div className="flex">
        {SocialICons.map((social) => (
          <div key={social.name}>
            <h1>{social.name}</h1>
          </div>
        ))}
      </div>
    </nav>
  )
}
