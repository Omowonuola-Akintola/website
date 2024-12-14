interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A beginners guide to RADAR Analysis with SNAP',
    description: `coming soon`,
    imgSrc: '/static/images/eo.png',
    //href: 'https://www.google.com',
  },
  {
    title: 'Coming Soon',
    description: ``,
    //imgSrc: '/static/images/time-machine.jpg',
    //href: '/blog/the-time-machine',
  },
]

export default projectsData
