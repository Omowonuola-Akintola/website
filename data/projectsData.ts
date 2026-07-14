interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title:
      'ICPR 2026 Contest: Beyond Visible Spectrum: AI for Agriculture 2026 Task: Boosting automatic crop disease classification using Sentinel-2 satellite imagery and self-supervised learning (SSL)',
    description: `This project focuses on automatic crop disease classification from multispectral Sentinel-2 data. The challenge is to extract meaningful features from limited labeled data, using unlabeled satellite imagery using self-supervised learning, and evaluating downstream classification performance.`,
    imgSrc: '/static/images/icpr2026.jpeg',
    href: 'https://github.com/Omowonuola-Akintola/ICPR-Contest-2026',
  },

  {
    title: 'Deep Learning–Based Ship Detection in SAR Imagery',
    description: `Detecting ships in SAR images using deep learning models for improved maritime monitoring and surveillance.`,
    imgSrc: '/static/images/shipdet.jpeg',
    href: 'https://github.com/Omowonuola-Akintola/Ship_Detection_DeepLearning',
  },

  {
    title: 'Modeling Earthquake Damage using Machine Learning',
    description: `Based on aspects of building location and construction, the goal is to predict the level of damage to buildings caused by the 2015 Gorkha earthquake in Nepal..`,
    imgSrc: '/static/images/earthquake.jpeg',
    href: 'https://github.com/Omowonuola-Akintola/richters-predictor-modeling-earthquake-damage',
  },

  {
    title: 'Sar Superpixel Classification',
    description: `This project implements an object-based image analysis (OBIA) workflow for SAR image segmentation and classification 
    using superpixels and Random Forest (RF) classification. The goal is to distinguish water and non-water regions in synthetic aperture 
    radar (SAR) imagery.`,
    imgSrc: '/static/images/Bangladesh.jpeg',
    href: 'https://github.com/Omowonuola-Akintola/sar-superpixel-classification',
  },

  {
    title: 'SBAS-InSAR Dam Deformation Monitoring',
    description: `Monitoring and analysis of surface deformation from July 2022 to October 2024. Motivated by reports of a 
    potential dam collapse in 2022 and subsequent flooding in September 2024, Sentinel-1 ascending orbit SAR data from July 
    2022 to October 2024 were processed to generate interferograms for the time series analysis. Time-series deformation and 
    velocity maps were generated to detect any precursory ground movements that may have signaled structural instability.`,
    imgSrc: '/static/images/Velocitymap.jpeg',
    href: 'https://github.com/Omowonuola-Akintola/sbas-insar-dam-monitoring',
  },

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
    from high-resolution imagery to support effective planning and resource allocation in refugee camps. This project is presented
    in a simple poster presentation format`,
    imgSrc: '/static/images/Paper.jpeg',
    href: 'https://omowonuola-akintola.github.io/website/blog/OBIA',
  },
]

export default projectsData
