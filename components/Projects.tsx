"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

type ProjectData = {
  title: { th: string; en: string };
  description: { th: string; en: string };
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  features: { th: string[]; en: string[] };
};

const projects: ProjectData[] = [
  {
    title: {
      th: "ระบบแนะนำสไตล์แฟชั่น",
      en: "Fashion Style Recommendation System",
    },
    description: {
      th: "ระบบช่วยให้คุณเลือกแฟชั่นได้อย่างมีข้อมูล โดยใช้ข้อมูลจากการสำรวจจากบุคคลที่มีสไตล์การแต่งตัวที่แตกต่างกัน ออกแบบมาสำหรับผู้ที่ลังเลในการเลือกสินค้าแฟชั่น",
      en: "The system helps you make informed fashion choices by using survey data from individuals with different styles of dress, designed for those who are indecisive about choosing fashion items.",
    },
    technologies: ["HTML", "PHP", "MySQL", "Tailwind CSS", "Machine Learning"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P0.png",
    features: {
      th: [
        "คำนวณสไตล์การแต่งตัวจากตัวเอง",
        "ใช้ Machine Learning",
        "รูปแบบสไตล์แนะนำ",
        "ระบบสมาชิก",
      ],
      en: [
        "Calculate personal style from user data",
        "Machine Learning integration",
        "Style recommendations",
        "Member system",
      ],
    },
  },
  {
    title: {
      th: "เว็บไซต์อสังหาริมทรัพย์",
      en: "Real Estate Website",
    },
    description: {
      th: "เว็บไซต์สำหรับโฆษณาและค้นหาอสังหาริมทรัพย์ขาย นี่เป็นโปรเจกต์ที่ฉันแก้ไขบั๊กตามรายการที่ผู้ทดสอบทดสอบและทำรายการสำหรับแก้ไขในส่วน front-end",
      en: "A website for advertising and finding real estate for sale This is a project where I fixed bugs according to the list that the tester tested and made a list for fixing in the front-end.",
    },
    technologies: ["AngularTS", "API"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P1_4.png",
    features: {
      th: [
        "ค้นหาอสังหาริมทรัพย์",
        "กรองตามประเภทและราคา",
        "ดูรายละเอียดและรูปภาพ",
        "ติดต่อเจ้าของ",
      ],
      en: [
        "Search for real estate",
        "Filter by type and price",
        "View details and images",
        "Contact owner",
      ],
    },
  },
  {
    title: {
      th: "แอปพลิเคชัน e-BBS ด้านความปลอดภัย",
      en: "Safety's e-BBS App",
    },
    description: {
      th: "แอปพลิเคชัน e-BBS ด้านความปลอดภัยเป็นระบบที่ได้รับการปรับปรุงซึ่งรวมข้อมูลที่รวบรวมจาก Google Forms รวมถึงระบบแจ้งเตือนผู้ใช้เกี่ยวกับสถานะข้อมูลผิดปกติ เช่น ข้อมูลการตรวจสอบยานพาหนะและข้อมูลการประเมินตนเองก่อนทำงาน",
      en: "Safety's e-BBS App is an enhanced system that integrates data collected from Google Forms. It includes a system for notifying users of abnormal data statuses, such as vehicle inspection data and pre-work self-assessment data.",
    },
    technologies: ["HTML", "PHP", "SQL Server", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P1.png",
    features: {
      th: [
        "แบบฟอร์มอัปเดตข้อมูลในแต่ละกะการทำงาน",
        "ระบบแจ้งเตือนสถานะผิดปกติของข้อมูล",
        "KPI การตรวจเช็คของแต่ละบุคคล",
        "กราฟแสดงผลสถิติข้อมูล",
        "อัปเดตข้อการตรวจเช็คแต่ละวันแบบเรียลไทม์",
      ],
      en: [
        "Form to update data for each work shift",
        "Abnormal data status notification system",
        "Individual check KPI",
        "Statistics graph display",
        "Real-time daily check updates",
      ],
    },
  },
  {
    title: {
      th: "ระบบตรวจสอบยานพาหนะ (e-BBS App)",
      en: "Vehicle Monitoring System (e-BBS App)",
    },
    description: {
      th: "ฟีเจอร์แรกที่พัฒนาโดยแอป e-BBS คือระบบตรวจสอบยานพาหนะสำหรับแต่ละกะการทำงาน ให้การอัปเดตแบบเรียลไทม์เกี่ยวกับการตรวจสอบและแจ้งเตือนผู้ใช้เกี่ยวกับสถานะยานพาหนะผิดปกติระหว่างการตรวจสอบ",
      en: "The first feature developed by the e-BBS App is a vehicle monitoring system for each work shift, providing real-time updates on checks and notifying users of any abnormal vehicle statuses during inspections.",
    },
    technologies: ["HTML", "PHP", "SQL Server", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P1_1.png",
    features: {
      th: [
        "การแสดงผลการตรวจเช็คไปก่อนหน้าจากแบบฟอร์ม",
        "ระบบแจ้งเตือนสถานะผิดปกติของข้อมูลการตรวจเช็ครถ",
        "KPI การตรวจเช็คของแต่ละบุคคล",
        "กราฟแสดงผลสถิติข้อมูล",
        "อัปเดตข้อการตรวจเช็คแต่ละวันแบบเรียลไทม์ที่หน้า Dashboard",
      ],
      en: [
        "Display previous check results from forms",
        "Abnormal vehicle check data notification system",
        "Individual check KPI",
        "Statistics graph display",
        "Real-time daily check updates on Dashboard",
      ],
    },
  },
  {
    title: {
      th: "ระบบการประเมินตนเอง (e-BBS App)",
      en: "Self Declaration System (e-BBS App)",
    },
    description: {
      th: "ส่วนที่สองที่สร้างโดยใช้แอป e-BBS คือระบบการประเมินตนเองก่อนเริ่มงาน เป็นระบบสำหรับการตรวจสอบตนเองตามหัวข้อที่กำหนด พัฒนาโดยใช้ Google Forms",
      en: "The second section, created using the e-BBS App, is the Self Declaration system before starting work. It's a system for self-checking attendance based on specified topics, developed using Google Forms.",
    },
    technologies: ["HTML", "PHP", "SQL Server", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P1_2.png",
    features: {
      th: [
        "การแสดงผลการตรวจเช็คไปก่อนหน้าจากแบบฟอร์ม",
        "ระบบแจ้งเตือนสถานะผิดปกติของข้อมูลการประกาศตนเองก่อนปฏิบัติงานของพนักงาน",
        "KPI การตรวจเช็คของแต่ละบุคคล",
        "กราฟแสดงผลสถิติข้อมูล",
        "อัปเดตข้อการตรวจเช็คแต่ละวันแบบเรียลไทม์ที่หน้า Dashboard",
      ],
      en: [
        "Display previous check results from forms",
        "Abnormal self-declaration data notification system before work",
        "Individual check KPI",
        "Statistics graph display",
        "Real-time daily check updates on Dashboard",
      ],
    },
  },
  {
    title: {
      th: "ระบบตรวจสอบตู้ชาร์จแบตเตอรี่ประจำวัน (e-BBS App)",
      en: "Daily Battery Charging Station Check System (e-BBS App)",
    },
    description: {
      th: "ส่วนที่สองที่สร้างโดยใช้แอป e-BBS คือระบบตรวจสอบตู้ชาร์จแบตเตอรี่ประจำวัน ระบบนี้ตรวจสอบเครื่องชาร์จก่อนเริ่มงานแต่ละวัน และได้รับการพัฒนาโดยใช้ Google Forms",
      en: "The second section, created using the e-BBS App, is the daily battery charging station check system. This system checks the chargers before starting work each day and was developed using Google Forms.",
    },
    technologies: ["HTML", "PHP", "SQL Server", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P1_3.png",
    features: {
      th: [
        "การแสดงผลการตรวจเช็คไปก่อนหน้าจากแบบฟอร์ม",
        "ระบบแจ้งเตือนสถานะผิดปกติของข้อมูลตรวจเช็คตู้ชาร์จแบตเตอรี่ประจำวัน",
        "กราฟแสดงผลสถิติข้อมูล",
        "อัปเดตข้อการตรวจเช็คแต่ละวันแบบเรียลไทม์ที่หน้า Dashboard",
      ],
      en: [
        "Display previous check results from forms",
        "Abnormal daily battery charging station check data notification system",
        "Statistics graph display",
        "Real-time daily check updates on Dashboard",
      ],
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [language, setLanguage] = useState<"th" | "en">("th");

  const currentProjects = [...projects].reverse();

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
            {language === "th" ? "โปรเจกต์ล่าสุด" : "Recent Projects"}
          </h2>
          
          {/* Language Switcher */}
          <div className="flex gap-2 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setLanguage("th")}
              className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                language === "th"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              ไทย
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                language === "en"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
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
                    alt={project.title[language]}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {project.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description[language]}
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
      {selectedProject !== null && currentProjects[selectedProject]?.features && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {currentProjects[selectedProject].image && (
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={currentProjects[selectedProject].image}
                    alt={currentProjects[selectedProject].title[language]}
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
                {currentProjects[selectedProject].title[language]}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {currentProjects[selectedProject].description[language]}
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  {language === "th" ? "ฟีเจอร์หลัก" : "Key Features"}
                </h4>
                <ul className="space-y-2">
                  {currentProjects[selectedProject].features[language].map((feature, idx) => (
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
                  {language === "th" ? "เทคโนโลยีที่ใช้" : "Technologies Used"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProjects[selectedProject].technologies.map((tech, techIndex) => (
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
