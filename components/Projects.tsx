"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Fashion Style Recommendation System",
    description:
      "The system helps you make informed fashion choices by using survey data from individuals with different styles of dress, designed for those who are indecisive about choosing fashion items.",
    technologies: ["HTML", "PHP", "MySQL", "Tailwind CSS", "Machine Learning"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P0.png",
    features: [
      "คำนวณสไตล์การแต่งตัวจากตัวเอง",
      "ใช้ Machine Learning",
      "รูปแบบสไตล์แนะนำ",
      "ระบบสมาชิก",
    ],
  },
  {
    title: "Safety's e-BBS App",
    description:
      "Safety's e-BBS App is an enhanced system that integrates data collected from Google Forms. It includes a system for notifying users of abnormal data statuses, such as vehicle inspection data and pre-work self-assessment data.",
    technologies: ["HTML", "PHP", "SQL Server", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P1.png",
    features: [
      "แบบฟอมอัพเดทข้อมูลในแต่ละกะการทำงาน",
      "ระบบแจ้งเตือนสถานะผิดปกติของข้อมูล",
      "KPI การตรวจเช็คของแต่ละบุคคล",
      "กราฟแสดงผลสถิติข้อมูล",
      "อัพเดทข้อการตรวจเช็คแต่ละวันแบบเรียลไทม์",
    ],
  },
  {
    title: "Vehicle Monitoring System (e-BBS App)",
    description:
      "The first feature developed by the e-BBS App is a vehicle monitoring system for each work shift, providing real-time updates on checks and notifying users of any abnormal vehicle statuses during inspections.",
    technologies: ["HTML", "PHP", "SQL Server", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P1_1.png",
    features: [
      "การแสดงผลการตรวจเช็คไปก่อนหน้าจากแบบฟอร์ม",
      "ระบบแจ้งเตือนสถานะผิดปกติของข้อมูลการตรวจเช็ครถ",
      "KPI การตรวจเช็คของแต่ละบุคคล",
      "กราฟแสดงผลสถิติข้อมูล",
      "อัพเดทข้อการตรวจเช็คแต่ละวันแบบเรียลไทม์ที่หน้า Dashboard",
    ],
  },
  {
    title: "Self Declaration System (e-BBS App)",
    description:
      "The second section, created using the e-BBS App, is the Self Declaration system before starting work. It's a system for self-checking attendance based on specified topics, developed using Google Forms.",
    technologies: ["HTML", "PHP", "SQL Server", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P1_2.png",
    features: [
      "การแสดงผลการตรวจเช็คไปก่อนหน้าจากแบบฟอร์ม",
      "ระบบแจ้งเตือนสถานะผิดปกติของข้อมูลSelf Declaration ก่อนปฏิบัติงานของพนักงาน",
      "KPI การตรวจเช็คของแต่ละบุคคล",
      "กราฟแสดงผลสถิติข้อมูล",
      "อัพเดทข้อการตรวจเช็คแต่ละวันแบบเรียลไทม์ที่หน้า Dashboard",
    ],
  },
  {
    title: "Daily Battery Charging Station Check System (e-BBS App)",
    description:
      "The second section, created using the e-BBS App, is the daily battery charging station check system. This system checks the chargers before starting work each day and was developed using Google Forms.",
    technologies: ["HTML", "PHP", "SQL Server", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P1_3.png",
    features: [
      "การแสดงผลการตรวจเช็คไปก่อนหน้าจากแบบฟอร์ม",
      "ระบบแจ้งเตือนสถานะผิดปกติของข้อมูลตรวจเช็คตู้ชาร์จแบตเตอร์รี่ประจำวัน",
      "กราฟแสดงผลสถิติข้อมูล",
      "อัพเดทข้อการตรวจเช็คแต่ละวันแบบเรียลไทม์ที่หน้า Dashboard",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          Recent Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...projects].reverse().map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => project.image && setSelectedProject(index)}
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject !== null && projects[projects.length - 1 - selectedProject]?.features && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {projects[projects.length - 1 - selectedProject].image && (
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={projects[projects.length - 1 - selectedProject].image!}
                    alt={projects[projects.length - 1 - selectedProject].title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FaTimes className="text-gray-800 dark:text-gray-200" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                {projects[projects.length - 1 - selectedProject].title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {projects[projects.length - 1 - selectedProject].description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  ฟีเจอร์หลัก
                </h4>
                <ul className="space-y-2">
                  {projects[projects.length - 1 - selectedProject].features?.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  เทคโนโลยีที่ใช้
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[projects.length - 1 - selectedProject].technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
