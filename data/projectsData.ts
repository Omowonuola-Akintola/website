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
    title: 'OBIA for Estimating Building Density in Refugee Camp',
    description: `Object-Based Image Analysis (OBIA) is a powerful methodology for extracting meaningful spatial information 
    from high-resolution imagery to support effective planning and resource allocation`,
    imgSrc: '/static/images/Paper.jpeg',
    href: 'https://omowonuola-akintola.github.io/website/blog/OBIA',
  },


]

export default projectsData
