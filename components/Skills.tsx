import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Git", icon: FaGitAlt, color: "text-red-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          ทักษะของฉัน
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Icon className={`text-5xl mb-4 ${skill.color}`} />
                <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
