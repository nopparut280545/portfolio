import {
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          ติดต่อฉัน
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  ข้อมูลติดต่อ
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:nopparut2845@gmaul.com"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                    <span>nopparut2845@gmaul.com</span>
                  </a>
                  <a
                    href="tel:0825952946"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaPhone className="text-blue-600 dark:text-blue-400" />
                    <span>082-595-2946</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  Social Media
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/nopparut280545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/nopparut.nootueng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/steven_ovxn?igsh=ZnA4M2hndDFjNGlo&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
