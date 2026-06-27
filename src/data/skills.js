import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaLock, FaShieldAlt, FaTerminal, FaRobot, FaCode
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, 
  SiJsonwebtokens, SiPassport, SiPostman, 
  SiOpenai, SiAnthropic
} from 'react-icons/si';

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Python", icon: FaPython, color: "text-blue-500" }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400 dark:text-white" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" }
    ]
  },
  {
    category: "Authentication & Security",
    skills: [
      { name: "JWT", icon: SiJsonwebtokens, color: "text-purple-500" },
      { name: "Passport.js", icon: SiPassport, color: "text-blue-400" },
      { name: "bcrypt.js", icon: FaLock, color: "text-red-400" },
      { name: "Joi Validation", icon: FaShieldAlt, color: "text-cyan-500" }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "React.js", icon: FaReact, color: "text-cyan-400 animate-spin-slow" }
    ]
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-900 dark:text-white" },
      { name: "VS Code", icon: FaCode, color: "text-blue-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" }
    ]
  },
  {
    category: "AI Tools",
    skills: [
      { name: "ChatGPT", icon: SiOpenai, color: "text-emerald-500" },
      { name: "Claude", icon: SiAnthropic, color: "text-orange-400" },
      { name: "GitHub Copilot", icon: FaRobot, color: "text-indigo-400" },
      { name: "Antigravity AI", icon: FaTerminal, color: "text-green-400" }
    ]
  }
];
