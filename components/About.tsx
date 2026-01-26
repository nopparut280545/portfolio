import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          เกี่ยวกับฉัน
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
                  <Image
                    src="/images/me.jpg"
                    alt="นพรุจ หนูถึง"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* About Text */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  นพรุจ หนูถึง
                </h3>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  สวัสดีครับ! ผมชื่อ <strong>นพรุจ หนูถึง</strong> เป็นนักพัฒนาเว็บไซต์ที่มีความหลงใหลในการสร้างสรรค์
                  แอปพลิเคชันและเว็บไซต์ที่สวยงามและใช้งานง่าย
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  ผมมีความเชี่ยวชาญในการใช้เทคโนโลยีสมัยใหม่ เช่น Next.js, React,
                  TypeScript และ Tailwind CSS เพื่อสร้างประสบการณ์ผู้ใช้ที่ดีที่สุด
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  ผมเชื่อในการเรียนรู้อย่างต่อเนื่องและพร้อมที่จะรับความท้าทายใหม่ๆ
                  เสมอ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
