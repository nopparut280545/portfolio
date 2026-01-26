"use client";

import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Profile Image */}
          <div
            className={`order-2 md:order-1 flex justify-center md:justify-start transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/me.jpg"
                alt="นพรุจ หนูถึง"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            className={`order-1 md:order-2 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="text-left space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                สวัสดีครับ
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  ผมชื่อ{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    นพรุจ หนูถึง
                  </span>
                </h2>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300">
                  ยินดีต้อนรับสู่ Portfolio ของฉัน
                </h3>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                ในเวลาว่าง ผมชอบเล่นเกมและพัฒนาเว็บไซต์ ผมรู้สึกตื่นเต้นที่จะได้เห็นว่า AI สามารถปรับปรุงประสบการณ์ผู้ใช้ให้ขึ้นได้อย่างไร และชอบหาข้อมูลและความรู้เพิ่มในการพัฒนาตัวเอง
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
                >
                  ดูโปรเจกต์
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all font-semibold"
                >
                  ติดต่อฉัน
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 md:mt-16 flex justify-center animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
