import { projects } from '@/data/projects';
import { SkillCanvas } from '@/app/components/SkillCanvas';
import Image from 'next/image';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-heading text-sm font-semibold uppercase tracking-widest"
      style={{ color: 'var(--color-ink)', opacity: 0.5 }}
    >
      {children}
    </h3>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="fixed inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r" style={{ borderColor: 'var(--color-ink)', opacity: 0.05 }} />
        ))}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-b" style={{ borderColor: 'var(--color-ink)', opacity: 0.05 }} />
        ))}
      </div>

      <div className="relative z-1 max-w-7xl mx-auto px-8">
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
                Chakron Yuraket (First)
              </h1>
              <h2
                className="font-heading mt-4 text-xl md:text-2xl"
                style={{ color: 'var(--color-ink)', opacity: 0.8 }}
              >
                Full-Stack Developer & System Thinker
              </h2>
              <p className="mt-8 text-base md:text-lg leading-relaxed md:leading-8 max-w-lg">
                I build robust and scalable web applications with a system thinker&apos;s approach. By grounding my work in 
                <span
                  className="px-2 py-1 rounded-md mx-1"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  clarity
                </span> 
                and 
                <span
                  className="px-2 py-1 rounded-md mx-1"
                  style={{ backgroundColor: 'var(--color-accent)', opacity: 0.7 }}
                >
                  structure
                </span>
                , I solve core business problems effectively. Actively seeking challenging remote-first opportunities.
              </p>
            </div>
            <div className="w-full">
              <SkillCanvas />
            </div>
          </div>
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        <section id="projects" className="py-24">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col">
                <div className="relative aspect-video overflow-hidden rounded-md" style={{ backgroundColor: 'var(--color-light-gray)' }}>
                  <Image
                    src={project.imageUrl} 
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-canvas bg-ink/50 px-4 py-2 rounded-md text-sm hover:bg-accent hover:text-ink">View Live</a>}
                      {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-canvas bg-ink/50 px-4 py-2 rounded-md text-sm hover:bg-accent hover:text-ink">View Code</a>}
                    </div>
                  </div>
                </div>
                <div className="flex-grow mt-6">
                  <h4 className="font-heading text-xl font-bold">{project.title}</h4>
                  <p className="mt-2 text-base" style={{ color: 'var(--color-ink)', opacity: 0.7 }}>
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--color-accent)', opacity: 0.7 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ABOUT SECTION ===== */}
        <section id="about" className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start">
          <div className="md:col-span-1">
            <SectionTitle>About Me</SectionTitle>
          </div>
          <div className="md:col-span-2">
            <div className="relative w-32 md:w-48 mb-12">
              <div 
                className="aspect-square w-full border overflow-hidden"
                style={{ borderColor: 'var(--color-ink)' }}
              >
                <Image 
                  src="https://avatars.githubusercontent.com/u/224547541?s=400&u=b93dda65a22ed6d553af8178b06231657b8b06fb&v=4" 
                  alt="Portrait of Chakron Yuraket" 
                  width={200}
                  height={200}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div 
                className="font-heading absolute -bottom-5 -right-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: 'var(--color-ink)', opacity: 0.7 }}
              >
                [ Portrait / C. Yuraket ]
              </div>
            </div>
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-ink)', opacity: 0.9 }}>
                <p>I am Chakron Yuraket (First), a self-taught Full-Stack Developer from Samut Songkhram Thailand My starting point wasn&apos;t a school, but a simple question: &apos;How does this work?&apos; This core curiosity, combined with a desire to build complex systems from the ground up, defines my approach. I am driven by a commitment to deeply understand technology, from its fundamental principles to advanced concepts in system architecture and AI</p>
                <p>I operate on the principle of &apos;Clarity, Structure, and a relentless focus on solving the right problem.&apos; My code must be readable, maintainable, and part of a scalable architecture. I don&apos;t believe in superficial fixes; I am wired to identify the root cause of a problem. This Full-Stack expertise allows me to maintain a high-level, holistic view of any system, ensuring all parts work in harmony. I am at my best when tackling complex challenges that demand intelligent and efficient solutions</p>
            </div>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section id="contact" className="py-24 text-center">
            <SectionTitle>Get In Touch</SectionTitle>
            <h2 className="font-heading mt-8 text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
              Have a project in mind or just want to say hello?
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-ink)', opacity: 0.7 }}>
              My inbox is always open. I&apos;ll get back to you as soon as possible.
            </p>
            <a 
              href="mailto:chakronwork@gmail.com" 
              className="font-heading inline-block mt-12 px-8 py-4 text-lg font-bold rounded-md transition-transform hover:scale-105"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              Say Hello
            </a>
        </section>
      </div>
    </>
  );
}