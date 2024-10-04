const tech = ['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Docker', 'Node.js', 'Figma', 'Three.js', 'SQL']

export const Carrousel = () => {
  return (
    <div className="overflow-x-hidden max-w-xs sm:max-w-md lg:max-w-2xl"> 
      <div className="flex gap-3 w-max animate-carrousel">
        {tech.map(item => {
          return (
            <h3 key={item} className="text-nowrap font-semibold text-zinc-800/60">{item}</h3>
          )
        })}
      </div>

    </div>
  )
}