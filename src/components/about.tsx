export default function About() {
  return (
    <div className="text-left">
      <p className="text-lg md:text-xl lg:text-2xl dark:text-gray-200 leading-relaxed">
        I'm{' '}
        <span className="font-bold dark:hover:text-blue-400 transition-colors">
          Dante Rodriguez
        </span>
        . I'm a fullstack web developer from Peru. I'm passionate about
        databases, and building open source web applications. I love to
        contribute to the open source community.
      </p>
      <div className="mt-6 md:mt-8 border-l-4 border-blue-500 pl-4">
        <p className="text-sm md:text-base dark:text-gray-400 italic">
          "Building the web, one line of code at a time"
        </p>
      </div>
    </div>
  )
}
