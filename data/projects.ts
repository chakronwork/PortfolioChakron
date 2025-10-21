// data/projects.ts

// เรากำหนด "พิมพ์เขียว" ของข้อมูลแต่ละโปรเจกต์ก่อน
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // Path ไปยังรูปภาพใน /public
  tags: string[];
  liveUrl?: string; // Optional: ลิงก์ไปเว็บจริง
  sourceUrl?: string; // Optional: ลิงก์ไป Github
}

// นี่คือ "ข้อมูลจริง" ของมึง
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A web application for real-time data visualization, built with Next.js and D3. Solved the problem of slow-loading dashboards for a client in the finance sector.",
    imageUrl: "/images/project-alpha.jpg", // 📍 ต้องเอารูปไปใส่ใน public/images/ นะ
    tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 2,
    title: "Service Beta",
    description: "An e-commerce platform with a custom headless CMS integration. Focused on performance and achieving a 95+ Lighthouse score.",
    imageUrl: "/images/project-beta.jpg", // 📍 เอารูปไปใส่ใน public/images/
    tags: ["React", "Node.js", "GraphQL", "Strapi"],
    liveUrl: "#",
  },
  // 📍📍📍 MARK: อยากเพิ่มโปรเจกต์ใหม่? ก็แค่ Copy-Paste object ข้างบนแล้วแก้ข้อมูลตรงนี้!
];