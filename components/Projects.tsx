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
      th: "ระบบเช็คสต็อกที่ SCGP",
      en: "Stock Checking System at SCGP",
    },
    description: {
      th: "ระบบเช็คสต็อกที่ SCGP เป็นการเช็คสินค้าของคลังนำข้อมูลสต๊อกของคลังมา Import เข้าระบบและคีย์ข้อมูลเช็คกับสินค้าในคลัง",
      en: "The stock checking system at SCGP involves checking warehouse inventory, importing warehouse stock data into the system, and then entering the data to check against the actual warehouse stock.",
    },
    technologies: ["HTML", "PHP", "MSSQL", "CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P0_1.png",
    features: {
      th: [
        "ข้อมูลสต็อกที่นำเข้า",
        "กรองตามประเภทสินค้าหรือข้อมูลสินค้า",
        "ดูรายละเอียดการเช็ค",
        "ข้อมูลสต็อกทั้งหมด",
      ],
      en: [
        "Imported stock data",
        "Filter by product type or product information",
        "View check details",
        "All stock information",
      ],
    },
  },
  {
    title: {
      th: "ระบบระบุตำแหน่งสินค้าภายในตู้คอนเทนเนอร์",
      en: "Container Tracking System",
    },
    description: {
      th: "ระบบระบุตำแหน่งสินค้าภายในตู้คอนเทนเนอร์ ถ่ายรูประบุตำแหน่งของสินค้าภายในตู้",
      en: "The container tracking system takes photos to identify the location of goods inside the container.",
    },
    technologies: ["HTML", "PHP", "MSSQL", "CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P0_2.png",
    features: {
      th: [
        "ข้อมูลตำแหน่งของสินค้า",
        "กรองตามประเภทตู้สินค้าหรือหมายเลขใบตั้งสินค้า",
        "ดาวน์โหลด PDF",
      ],
      en: [
        "Product location information",
        "Filter by container type or container number",
        "Download PDF",
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
    technologies: ["HTML", "PHP", "MSSQL", "Tailwind CSS"],
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
    technologies: ["HTML", "PHP", "MSSQL", "Tailwind CSS", "JavaScript"],
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
    technologies: ["HTML", "PHP", "MSSQL", "Tailwind CSS", "JavaScript"],
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
    technologies: ["HTML", "PHP", "MSSQL", "Tailwind CSS", "JavaScript"],
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
  {
    title: {
      th: "ระบบตรวจรอยเฉี่ยวชนรถงาน (e-BBS App)",
      en: "Work Vehicle Scratch and Collision Inspection System (e-BBS App)",
    },
    description: {
      th: "ส่วนที่สี่ที่สร้างโดยใช้แอป e-BBS คือระบบตรวจรอยเฉี่ยวชนรถงาน ระบบนี้ตรวจสอบรอยเฉี่ยวชนรถงานในแต่ละพื้นที่ก่อนออกกะปฏิบัติงาน และได้รับการพัฒนาโดยใช้การถ่ายภาพแล้วส่งใน LINE Group",
      en: "The fourth section created using the e-BBS App is the work vehicle scratch and collision inspection system. This system checks vehicle scratches and collision marks in each area before starting the work shift and was developed using photo submission through LINE Group.",
    },
    technologies: ["HTML", "PHP", "MSSQL", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P1_5.png",
    features: {
      th: [
        "การถ่ายรูป 3 ด้านของรถงาน และสามารถส่งแก้ไขได้เมื่อมีรอยเฉี่ยวชน",
        "ระบบการตรวจสอบภาพโดยหัวหน้างาน",
        "กราฟแสดงผลสถิติข้อมูล",
        "อัปเดตข้อการตรวจเช็คแต่ละวันแบบเรียลไทม์ที่หน้า Dashboard",
      ],
      en: [
        "Take photos of 3 sides of work vehicles and submit corrections when scratches or collision marks are found",
        "Image review system by supervisors",
        "Statistics graph display",
        "Real-time daily check updates on Dashboard",
      ],
    },
  },
  {
    title: {
      th: "การขาย สินค้าคงคลัง และเอกสาร (ERP App)",
      en: "Sales, Inventory and Document Management (ERP App)",
    },
    description: {
      th: "ส่วนงานที่พัฒนาจากระบบ ERP ของระบบจัดการสินค้าและข้อมูลงานเอกสารสำหรับธุรกิจเสื้อผ้า มีการเก็บข้อมูลใบสั่งซื้อ ที่อยู่ การส่งของ ระบบจัดการพนักงาน รวมถึงระบบคำนวณค่าคอมมิชชั่นและ OT",
      en: "A module developed from an ERP system for product management and document data in the clothing business. It stores purchase orders, addresses, delivery information, employee management data, and includes commission and OT calculation systems.",
    },
    technologies: ["Node.js", "Next.js", "Supabase", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P2.png",
    features: {
      th: [
        "ระบบสต็อกสินค้าเรียลไทม์",
        "ระบบคำนวณค่าคอมมิชชั่นและ OT",
        "ระบบจัดการเอกสารข้อมูลลูกค้าและข้อมูลสต็อก",
        "อัปเดตข้อมูลต่างๆ บน Dashboard แบบกราฟและสถิติข้อมูล",
      ],
      en: [
        "Real-time inventory stock system",
        "Commission and OT calculation system",
        "Customer document and stock information management system",
        "Dashboard updates with graphs and statistical data",
      ],
    },
  },
  {
    title: {
      th: "ระบบจัดการการอบรมพนักงานและข้อมูลใบอนุญาต (e-Training Development Centers)",
      en: "Employee Training and License Management System (e-Training Development Centers)",
    },
    description: {
      th: "เว็บแอป e-TDC คือระบบจัดการการอบรมของพนักงานในองค์กร เพื่อรับใบอนุญาตในการเข้าทำงาน พร้อมทั้งเก็บข้อมูลต่างๆ ของพนักงานและใบอนุญาตที่นับเวลาหมดอายุตามจริง และสามารถรีเทรนนิ่งการอบรมหลักสูตรได้หากใบอนุญาตหมดอายุ",
      en: "The e-TDC web application is an employee training management system for organizations to support work license approval. It stores employee and license data, tracks license expiration in real time, and supports retraining when licenses expire.",
    },
    technologies: ["HTML", "PHP", "MSSQL", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/P_3.png",
    features: {
      th: [
        "ระบบจัดการหลักสูตรการอบรม",
        "ระบบนับเวลาใบอนุญาตหมดอายุ",
        "ระบบข้อมูลพนักงาน",
        "อัปเดตข้อมูลได้อย่างเรียลไทม์จากข้อมูลจริง",
      ],
      en: [
        "Training course management system",
        "License expiration countdown system",
        "Employee information system",
        "Real-time updates from actual data",
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
