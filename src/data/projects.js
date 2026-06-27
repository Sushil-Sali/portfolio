import softwaveImg from "../assets/softwave.png";
import bookstoreImg from "../assets/bookstore.png";
import hotelsImg from "../assets/hotels.png";

export const projectsData = [
  {
    id: "softwave-technify",
    title: "Softwave-Technify",
    subtitle: "ERP/CRM Platform",
    image: softwaveImg,
    description:
      "A live ERP/CRM application for affiliate-based lead management with role-based access, secure APIs, and KYC uploads.",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "OTP",
      "Cloudinary",
      "Joi",
    ],
  },
  {
    id: "book-store",
    title: "BookStrore",
    subtitle: "E-Commerce Web App",
    image: bookstoreImg,
    description:
      "A responsive MERN stack online bookstore with secure login/signup, password hashing, and responsive UI built using React and Tailwind CSS.",
    tags: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "bcrypt.js",
      "Tailwind CSS",
      "Daisy UI",
    ],
    githubUrl: "https://github.com/Sushil-Sali/BookStrore",
  },
  {
    id: "hotels-listings-hub",
    title: "Hotels Listings Hub",
    subtitle: "Directory Platform",
    image: hotelsImg,
    description:
      "A hotel listing platform using server-side rendering, authentication, and secure form handling with Passport and Joi.",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Passport",
      "Joi",
    ],
    githubUrl: "https://github.com/Sushil-Sali/Hotels-Listing-Hub",
  },
];
