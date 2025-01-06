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
    Modern and innovative geospatial skill sets are being learned to help professionals, especially women keep up with 
    technology and ensure the skillsets provided remain relevant as the tech space grows.
    
    Why was this important to us?
    While geospatial technology continue making waves in tackling global issues, there are still many challenges preventing 
    ts full impact in some parts of the world. From shared experience, one of the major challenges is limited access to information, 
    often leaving young GIS professionals playing catch-up with the latest tools and innovations shaping the industry. This delay usually 
    impacts their ability to contribute effectively to projects and their competitiveness in the job market. Efforts to bridge this gap, 
    especially for the few women in the industry, become a strategic opportunity for growth, innovation, and sustainability. This endeavor 
    ensures the retention of women within the field while also bringing those from related sectors who have an interest.`,
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
