"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ข้อมูลทักษะของมึง
const skills = [
  { name: "TypeScript", level: 100 },
  { name: "Next.js / React", level: 100 },
  { name: "Node.js", level: 100 },
  { name: "PHP", level: 50 },
  { name: "Supabase", level: 70 },
  { name: "PostgreSQL / MYSQL", level: 60 },
  { name: "System Design", level: 50 },
  { name: "UX/UI Design", level: 20 },
  { name: "Docker & CI/CD", level: 20 },
  { name: "HTML & Javscript", level: 100 },
  { name: "Python", level: 70 },
  { name: "Git/GitHub", level: 80 },
];

// 👇👇👇 MARK: รื้อคอมโพเนนต์นี้ใหม่ทั้งหมด 👇👇👇
function SkillBar({ name, level, inView }: { name: string, level: number, inView: boolean }) {
  // สร้าง Array ของขีดสเกล 10 ช่อง
  const segments = Array.from({ length: 10 });

  // Variants สำหรับ Animation ของ Container (เพื่อให้ขีดสเกลโผล่มาทีละอัน)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // หน่วงเวลาให้แต่ละขีดโผล่มาไม่พร้อมกัน
      },
    },
  };

  // Variants สำหรับ Animation ของแต่ละขีดสเกล
  const segmentVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-medium" style={{ color: 'var(--color-ink)', opacity: 0.9 }}>
          {name}
        </span>
        <span className="text-xs font-mono" style={{ color: 'var(--color-ink)', opacity: 0.6 }}>
          {/* ใช้ font-mono ให้ดูเหมือนตัวเลขในแบบแปลน */}
          {level}%
        </span>
      </div>
      <motion.div
        className="flex w-full h-2 gap-1"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {segments.map((_, index) => {
          // เช็คว่าขีดนี้ควรจะ "สว่าง" หรือ "มืด"
          const isActive = (index + 1) * 10 <= level;
          return (
            <motion.div
              key={index}
              className="w-full h-full rounded-sm"
              variants={segmentVariants}
              style={{
                backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-ink)',
                opacity: isActive ? 1 : 0.1,
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

// Component หลัก (เหมือนเดิม)
export function SkillCanvas() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="hidden md:flex flex-col justify-center items-start h-full gap-4">
      <h4 className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-ink)', opacity: 0.5 }}>
        Core Competencies
      </h4>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} inView={inView} />
      ))}
    </div>
  );
}