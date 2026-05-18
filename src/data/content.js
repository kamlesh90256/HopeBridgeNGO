import {
  FaFacebookF,
  FaHandsHelping,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaLeaf,
  FaGlobeAmericas,
  FaHands,
  FaHeart,
  FaHome,
  FaSeedling,
  FaTwitter,
} from 'react-icons/fa';

export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Features', href: '#features' },
  { label: 'Donation', href: '#donation' },
  { label: 'Contact', href: '#contact' },
];

export const programCards = [
  {
    title: 'Education Support',
    description: 'Back school supplies, tuition aid, digital learning access, and mentorship for underserved children.',
    icon: FaGraduationCap,
  },
  {
    title: 'Community Health',
    description: 'Support outreach camps, wellness awareness, and access to essential health resources.',
    icon: FaHeart,
  },
  {
    title: 'Sustainable Growth',
    description: 'Fund green initiatives, local resilience projects, and long-term community development.',
    icon: FaLeaf,
  },
  {
    title: 'Volunteer Mobilization',
    description: 'Coordinate volunteers, training, and outreach events that amplify real-world impact.',
    icon: FaHandsHelping,
  },
  {
    title: 'Global Partnerships',
    description: 'Build strategic partnerships with sponsors, institutions, and local changemakers.',
    icon: FaGlobeAmericas,
  },
  {
    title: 'Emergency Relief',
    description: 'Deliver rapid aid, essentials, and coordinated support when communities need it most.',
    icon: FaHands,
  },
];

export const featureCards = [
  {
    title: 'Donation Tracking',
    description: 'Show supporters how funds are allocated with transparent, easy-to-read impact summaries.',
    icon: FaHome,
  },
  {
    title: 'Volunteer Matching',
    description: 'Connect people to the causes, events, and roles that fit their time and strengths.',
    icon: FaHandsHelping,
  },
  {
    title: 'Program Planning',
    description: 'Organize initiatives, milestones, and campaigns with a simple, strategic workflow.',
    icon: FaSeedling,
  },
  {
    title: 'Community Reporting',
    description: 'Measure reach, participation, and results with clear dashboards and updates.',
    icon: FaGlobeAmericas,
  },
];

export const statistics = [
  { value: '20,000+', label: 'Trees Planted' },
  { value: '50,000+', label: 'Meals Distributed' },
  { value: '900+', label: 'Girls Empowered' },
  { value: '1,500+', label: 'Covid Relief Reach' },
];

export const testimonials = [
  {
    name: 'Maya Johnson',
    role: 'Community Volunteer',
    quote: 'InAmigos gave our local volunteer team a clear structure, real momentum, and a way to measure impact.',
    rating: 5,
    avatarColor: 'from-emerald-400 to-lime-300',
  },
  {
    name: 'Omar Rahman',
    role: 'Partner Organization Lead',
    quote: 'Their outreach process is professional, transparent, and easy to align with long-term nonprofit goals.',
    rating: 5,
    avatarColor: 'from-sky-400 to-cyan-300',
  },
  {
    name: 'Grace Williams',
    role: 'Monthly Donor',
    quote: 'It feels trustworthy and mission-driven, which makes supporting their work feel simple and meaningful.',
    rating: 5,
    avatarColor: 'from-blue-400 to-emerald-200',
  },
];

export const footerQuickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Features', href: '#features' },
  { label: 'Donation', href: '#donation' },
  { label: 'Contact', href: '#contact' },
];

export const footerSocials = [
  { label: 'Facebook', href: 'https://www.facebook.com/InAmigos/', icon: FaFacebookF },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/inamigos-foundation-1289781b1', icon: FaLinkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/inamigos/', icon: FaInstagram },
  { label: 'X', href: 'https://x.com/inamigosf', icon: FaTwitter },
];

export const trustPoints = [
  'Licensed by Central Government.',
  '80G and 12A certified organization (approved by Commissioner of Income Tax).',
  'Books of account maintained with monthly GST filing, auditing, and annual reporting.',
  'Donated Rs 30,000 to PM Care Fund in our starting phase (2020).',
  'Good social media presence, volunteer reach, and transparent organization.',
  'NGO DARPAN registered by NITI AAYOG (Govt. body).',
  'CSR-1 registered.',
  'IAF ISO 9001:2015 certified.',
  'Trademarked brand name and logo approved by the government.',
];

export const trustCertificationNote =
  'IAF ISO 9001:2015 reflects high-quality management standards, reliability, and strong professionalism in measurable impact delivery.';

export const fundUsage = [
  {
    title: 'Food Drives',
    items: [
      'Daily meal distribution in slum areas and orphanages.',
      'Nutritional kits for pregnant women and children.',
      'Community kitchens during festivals and emergencies.',
      'Ration kits for low-income families.',
      'No-food-waste campaigns to collect surplus food from events.',
    ],
  },
  {
    title: 'Social Work',
    items: [
      'Education support for underprivileged children (books, uniforms, fees).',
      'Health camps for free medical check-ups and medicines.',
      'Vocational training support for youth and women.',
    ],
  },
  {
    title: 'Charity Drives',
    items: [
      'Winter clothes and blankets for homeless individuals.',
      'Medical emergency support (hospital bills and medicines).',
      'School supplies for students in need.',
    ],
  },
  {
    title: 'Cleanliness Drives',
    items: [
      'Street cleaning campaigns in urban and rural areas.',
      'Dustbin and waste segregation point setup in public areas.',
      'Plastic-free zone promotion with cloth and jute bag distribution.',
    ],
  },
  {
    title: 'Operational Costs',
    items: ['Utility bills and day-to-day organizational expenses.'],
  },
  {
    title: 'Technical Costs',
    items: [
      'Website development and maintenance.',
      'Hosting and domain costs, periodic updates.',
      'Online payment gateway support for donation collection.',
    ],
  },
];

export const keyProjects = [
  { title: 'Project Prakriti', impact: '20,000+ trees planted.', image: 'https://source.unsplash.com/800x600/?trees,plantation', fallback: '/images/project-prakriti.svg' },
  { title: 'Project Seva', impact: '50,000+ meals distributed.', image: 'https://source.unsplash.com/800x600/?food,meals,distribution', fallback: '/images/project-seva.svg' },
  { title: 'Project Udaan', impact: 'Empowered 900+ girls through digital campaigns.', image: 'https://source.unsplash.com/800x600/?education,girls,students', fallback: '/images/project-udaan.svg' },
  { title: 'Project Jeev', impact: 'Feeding 50+ animals daily.', image: 'https://source.unsplash.com/800x600/?animals,feeding', fallback: '/images/project-jeev.svg' },
  { title: 'Project Bachpanshala', impact: 'Educating children in rural areas.', image: 'https://source.unsplash.com/800x600/?children,school', fallback: '/images/project-bachpanshala.svg' },
];

export const covidRelief = [
  'Distributed food to over 1,500+ people during COVID-19.',
  'Distributed stationery items to students in Kolkata.',
  'Distributed clothes in many regions of Chhattisgarh.',
  'Distributed masks and sanitizer in rural areas.',
  'Distributed food to street animals during the pandemic.',
  'Visited orphanages to check and support elder health.',
];

export const internships = [
  'Field Volunteer',
  'Community Teacher',
  'Graphic Design',
  'Community Management Volunteer',
  'Social Entrepreneurship',
  'Social Work Volunteer',
  'Fundraising Volunteer',
  'Content Writing',
];

export const certificateBenefits = [
  'Industry recognition from a CSR-1 registered and ISO-certified NGO.',
  'Global acceptance and improved credibility for internship/volunteer profiles.',
  'Future opportunities with stronger trust for NGO and CSR roles.',
  'Recruitment advantage in companies with dedicated CSR departments.',
  'Improved resume impact with relevant, practical social work experience.',
  'Career credibility through association with registered and licensed institutions.',
  'Volunteer identity that reflects social responsibility and leadership.',
];

export const socialPresenceLinks = [
  'https://www.facebook.com/InAmigos/',
  'https://www.linkedin.com/in/inamigos-foundation-1289781b1',
  'https://www.instagram.com/inamigos/',
  'https://x.com/inamigosf',
  'https://www.inamigosfoundation.org.in/',
];
