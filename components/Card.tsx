import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => {
  const cardInner = (
    <div
      className={`${
        imgSrc && 'h-full'
      } group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 ${
        href ? 'hover:-translate-y-1 hover:border-primary-400 hover:shadow-lg' : ''
      } dark:border-gray-700 dark:bg-gray-900`}
    >
      {imgSrc && (
        <div className="overflow-hidden">
          <Image
            alt={title}
            src={imgSrc}
            className="h-40 w-full object-cover object-center transition-transform duration-200 group-hover:scale-105 md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-3 text-xl font-bold leading-7 tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="prose max-w-none text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )

  return (
    <div className="max-w-[544px] p-4 md:w-1/2">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`} className="block h-full no-underline">
          {cardInner}
        </Link>
      ) : (
        cardInner
      )}
    </div>
  )
}

export default Card
