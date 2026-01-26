# Portfolio Website

Portfolio website สร้างด้วย Next.js 14, TypeScript, และ Tailwind CSS

## คุณสมบัติ

- ✨ UI สวยงามและทันสมัย
- 📱 Responsive Design (รองรับทุกขนาดหน้าจอ)
- 🌙 Dark Mode Support
- ⚡ Fast Performance ด้วย Next.js
- 🎨 Tailwind CSS สำหรับ styling
- 📧 Contact Form
- 🔗 Social Media Links

## เทคโนโลยีที่ใช้

- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-first CSS Framework
- **React Icons** - Icon Library

## การติดตั้ง

1. ติดตั้ง dependencies:
```bash
npm install
```

2. รัน development server:
```bash
npm run dev
```

3. เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

## การ Build สำหรับ Production

```bash
npm run build
npm start
```

## การ Deploy บน Vercel

1. Push โค้ดไปยัง GitHub repository
2. ไปที่ [Vercel](https://vercel.com)
3. Import project จาก GitHub
4. Vercel จะ detect Next.js project อัตโนมัติ
5. คลิก Deploy

หรือใช้ Vercel CLI:

```bash
npm i -g vercel
vercel
```

## การปรับแต่ง

### แก้ไขข้อมูลส่วนตัว

- แก้ไขข้อมูลใน `components/About.tsx` สำหรับส่วนเกี่ยวกับ
- แก้ไขข้อมูลใน `components/Skills.tsx` สำหรับทักษะ
- แก้ไขข้อมูลใน `components/Projects.tsx` สำหรับโปรเจกต์
- แก้ไขข้อมูลใน `components/Contact.tsx` สำหรับข้อมูลติดต่อ

### แก้ไขสีและธีม

แก้ไขไฟล์ `tailwind.config.ts` และ `app/globals.css` เพื่อปรับแต่งสีและธีม

## License

MIT
