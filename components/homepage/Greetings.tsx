import siteMetadata from '@/data/siteMetadata'

//import Twemoji from '@/components/ui/Twemoji';

const Greeting = () => {
  const className = 
    'bg-gradient-to-r from-gray-500 to-slate-400 dark:bg-gradient-to-l dark:from-blue-800 dark:to-primary-600 ' +
    'mb-8 bg-clip-text text-3xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'

  return (
    <div className={className}>
      Hello, folks! <span className="font-bold">Discover projects and blogs on EO for Good.</span>
    </div>
  )
}

export default Greeting;

