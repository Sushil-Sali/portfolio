import softwaveImg from '../assets/softwave.png';
import bookstoreImg from '../assets/bookstore.png';
import hotelsImg from '../assets/hotels.png';

export const projectsData = [
  {
    id: "softwave-technify",
    title: "Softwave-Technify",
    subtitle: "ERP/CRM System",
    image: softwaveImg,
    description: "A live enterprise-grade ERP/CRM system designed to streamline workflow automation. Features role-based access control, secure RESTful APIs, secure user logins with JWT and OTP, image uploading via Cloudinary, and robust schema designs.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Joi"],
    githubUrl: "https://github.com/sushilsali",
    liveUrl: null, // Set to null if not available
    featured: true
  },
  {
    id: "book-store",
    title: "Book Store",
    subtitle: "E-Commerce Web App",
    image: bookstoreImg,
    description: "A responsive MERN stack online bookstore application. Users can browse categories, search for books, manage their shopping carts, and place orders. Administrators have access to an inventory management system.",
    tags: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "Node.js"],
    githubUrl: "https://github.com/sushilsali",
    liveUrl: "https://github.com/sushilsali" // Fallback link
  },
  {
    id: "hotels-listings-hub",
    title: "Hotels Listings Hub",
    subtitle: "Directory Platform",
    image: hotelsImg,
    description: "A lodging and hotel listings directory where users can search, browse, view, and rate listed properties. Features fully dynamic server-side rendering, geographical filters, and user reviews.",
    tags: ["Express.js", "MongoDB", "EJS Templates", "Bootstrap", "Node.js"],
    githubUrl: "https://github.com/sushilsali",
    liveUrl: null
  }
];
