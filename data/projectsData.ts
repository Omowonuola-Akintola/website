interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [

  {
    title: 'The Women Learn Program',
    description: `In 2023, I piloted the Women Learn Program (WLP) through The GIS Girl, a social impact initiative that
    supports diversity in the geospatial industry. Through this program, my co-facilitator and I wanted to create a space where:
    modern and innovative geospatial skill sets are being learned to help professionals, especially women keep up with 
    technology and ensure that they are able to contribute to projects that matter to them and they remain relevant as the 
    tech space grows.`,
    imgSrc: '/static/images/WLP.jpeg',
    href: 'https://drive.google.com/file/d/16-7v8WMKoD8GPjrXqsIAy6kg8xi6zgV1/view',
  },

  {
    title: 'A beginners guide to RADAR Analysis with SNAP',
    description: `coming soon`,
    imgSrc: '/static/images/eo.png',
    //href: 'https://www.google.com',
  },


]

export default projectsData
