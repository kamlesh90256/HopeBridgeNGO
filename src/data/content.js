import {
  FaFacebookF,
  FaHeart,
  FaHandsHelping,
  FaInstagram,
  FaLeaf,
  FaLinkedin,
  FaPaw,
  FaShieldAlt,
  FaTwitter,
  FaUsers,
  FaUtensils,
  FaSeedling,
  FaBullhorn,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLock,
  FaCreditCard,
  FaChild,
  FaHands,
} from 'react-icons/fa';

export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Mission', href: '#mission' },
  { label: 'Campaigns', href: '#campaigns' },
  { label: 'Impact', href: '#impact' },
  { label: 'Donate', href: '#donation' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { value: 50000, label: 'Meals distributed', icon: FaUtensils, suffix: '+' },
  { value: 20000, label: 'Trees planted', icon: FaSeedling, suffix: '+' },
  { value: 900, label: 'Girls empowered', icon: FaChild, suffix: '+' },
  { value: 50, label: 'Animals fed daily', icon: FaPaw, suffix: '+' },
];

export const missionPillars = [
  {
    title: 'Transparent giving',
    description: 'Every rupee is tied to a visible outcome, clear campaign, and easy-to-read progress summary.',
    icon: FaShieldAlt,
  },
  {
    title: 'Community-led work',
    description: 'Programs are shaped with local volunteers, partner groups, and the communities being served.',
    icon: FaHandsHelping,
  },
  {
    title: 'Lasting social impact',
    description: 'Food relief, education support, and environmental action are designed to create durable change.',
    icon: FaLeaf,
  },
];

export const trustPoints = [
  'Licensed by Central Government.',
  '80G and 12A certified organization (approved by Commissioner of Income Tax).',
  'Books of account maintained with monthly GST filing, auditing, and annual reporting.',
  'NGO DARPAN registered by NITI AAYOG (Govt. body).',
  'CSR-1 registered and ISO 9001:2015 certified.',
  'Trademarked brand name and logo approved by the government.',
];

export const trustCertificationNote =
  'Verified registrations, regular reporting, and a public-facing donation flow make the platform feel credible and ready for real supporters.';

export const campaignCards = [
  {
    title: 'Project Seva',
    category: 'Food Security',
    progress: 78,
    summary: 'Weekly meal distribution and ration support for vulnerable families.',
    impact: '50,000+ meals served',
    accent: 'from-sky-500 to-cyan-400',
    icon: FaUtensils,
  },
  {
    title: 'Project Prakriti',
    category: 'Environment',
    progress: 64,
    summary: 'Tree plantation drives and clean-up campaigns with youth volunteers.',
    impact: '20,000+ trees planted',
    accent: 'from-emerald-500 to-lime-400',
    icon: FaSeedling,
  },
  {
    title: 'Project Udaan',
    category: 'Education',
    progress: 71,
    summary: 'Learning support, digital access, and confidence-building initiatives for girls.',
    impact: '900+ girls empowered',
    accent: 'from-blue-500 to-indigo-400',
    icon: FaChild,
  },
  {
    title: 'Project Jeev',
    category: 'Animal Welfare',
    progress: 54,
    summary: 'Daily care, feeding support, and emergency help for street animals.',
    impact: '50+ animals fed daily',
    accent: 'from-amber-500 to-orange-400',
    icon: FaPaw,
  },
];

export const donationTiers = [
  {
    amount: '₹2,500',
    title: 'Sponsor a meal drive',
    description: 'Covers cooked meals, packing, and last-mile distribution for one community outreach.',
    progress: 72,
    badge: 'Most popular',
    icon: FaUtensils,
    perks: ['Meals with visible impact updates', 'Support for vulnerable families'],
  },
  {
    amount: '₹5,000',
    title: 'Fund a volunteer kit',
    description: 'Supports uniforms, transport, and activity materials for a field volunteer team.',
    progress: 64,
    badge: 'Volunteer ready',
    icon: FaHandsHelping,
    perks: ['Volunteer onboarding support', 'Field-ready resources'],
  },
  {
    amount: '₹10,000',
    title: 'Back a campaign milestone',
    description: 'Helps scale a visible campaign with shelter, supplies, and documentation.',
    progress: 84,
    badge: 'High impact',
    icon: FaBullhorn,
    perks: ['Campaign progress tracking', 'Public acknowledgement'],
  },
];

export const secureBadges = [
  { label: 'Encrypted checkout', icon: FaLock },
  { label: 'Bank-grade payment flow', icon: FaCreditCard },
  { label: 'Transparent receipts', icon: FaCheckCircle },
];

export const volunteerSkills = [
  'Community outreach',
  'Content writing',
  'Graphic design',
  'Fundraising',
  'Field coordination',
  'Teaching support',
];

export const volunteerInterests = [
  'Food drives',
  'Education support',
  'Animal welfare',
  'Tree plantation',
  'Digital campaigns',
  'Event management',
];

export const impactCards = [
  {
    value: 50000,
    label: 'Meals distributed',
    note: 'Hot meals, ration kits, and festival relief support.',
    icon: FaUtensils,
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    value: 20000,
    label: 'Trees planted',
    note: 'Community plantation drives with local caretaking plans.',
    icon: FaSeedling,
    accent: 'from-emerald-500 to-lime-400',
  },
  {
    value: 900,
    label: 'Girls empowered',
    note: 'Learning access, confidence building, and digital support.',
    icon: FaChild,
    accent: 'from-blue-500 to-indigo-400',
  },
  {
    value: 50,
    label: 'Animals fed daily',
    note: 'Regular food support for rescued and street animals.',
    icon: FaPaw,
    accent: 'from-amber-500 to-orange-400',
  },
];

export const testimonials = [
  {
    name: 'Maya Johnson',
    role: 'Community Volunteer',
    quote: 'The structure is clear, the mission feels genuine, and every campaign makes it easy to see where help is going.',
    rating: 5,
    accent: 'from-emerald-400 to-lime-300',
  },
  {
    name: 'Omar Rahman',
    role: 'CSR Partner',
    quote: 'This feels like the kind of NGO platform our team would confidently recommend to donors and collaborators.',
    rating: 5,
    accent: 'from-sky-400 to-cyan-300',
  },
  {
    name: 'Grace Williams',
    role: 'Monthly Donor',
    quote: 'The transparent presentation and heartfelt storytelling make supporting the work feel immediate and meaningful.',
    rating: 5,
    accent: 'from-blue-400 to-emerald-200',
  },
];

export const galleryItems = [
  { title: 'Meal distribution', category: 'Community relief', accent: 'from-sky-500 to-cyan-400' },
  { title: 'Plantation drive', category: 'Environment', accent: 'from-emerald-500 to-lime-400' },
  { title: 'Learning support', category: 'Education', accent: 'from-blue-500 to-indigo-400' },
  { title: 'Animal feeding', category: 'Animal care', accent: 'from-amber-500 to-orange-400' },
  { title: 'Volunteer meet-up', category: 'People power', accent: 'from-teal-500 to-emerald-400' },
  { title: 'Campaign outreach', category: 'Awareness', accent: 'from-violet-500 to-sky-400' },
];

export const contactDetails = [
  { label: 'Email', value: 'hello@inamigos.org', icon: FaEnvelope },
  { label: 'Phone', value: '+91 90000 00000', icon: FaPhoneAlt },
  { label: 'Location', value: 'India-wide community outreach', icon: FaMapMarkerAlt },
];

export const footerQuickLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Campaigns', href: '#campaigns' },
  { label: 'Impact', href: '#impact' },
  { label: 'Donate', href: '#donation' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const footerSocials = [
  { label: 'Facebook', href: 'https://www.facebook.com/InAmigos/', icon: FaFacebookF },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/inamigos-foundation-1289781b1', icon: FaLinkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/inamigos/', icon: FaInstagram },
  { label: 'X', href: 'https://x.com/inamigosf', icon: FaTwitter },
];

export const socialPresenceLinks = [
  'https://www.facebook.com/InAmigos/',
  'https://www.linkedin.com/in/inamigos-foundation-1289781b1',
  'https://www.instagram.com/inamigos/',
  'https://x.com/inamigosf',
  'https://www.inamigosfoundation.org.in/',
];
