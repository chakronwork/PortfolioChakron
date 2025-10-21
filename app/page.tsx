import { projects } from '@/data/projects';
import { SkillCanvas } from '@/app/components/SkillCanvas';

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
                Crafting robust and scalable web applications. My approach is rooted in clarity, structure, and a relentless focus on solving the right problem. Leveraging this approach in remote-first environments, I am looking for new remote or hybrid-flexible challenges
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
                <div className="flex-grow mt-6">
                  <h4 className="font-heading text-xl font-bold">{project.title}</h4>
                  <p className="mt-2 text-base" style={{ color: 'var(--color-ink)', opacity: 0.7 }}>
                    {project.description}
                  </p>
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
                style={{ 
                  borderColor: 'var(--color-ink)',
                }}
              >
                <img 
                  src="https://avatars.githubusercontent.com/u/224547541?s=400&u=b93dda65a22ed6d553af8178b06231657b8b06fb&v=4" 
                  alt="Portrait of Chakron Yuraket" 
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
                <p>I am Chakron Yuraket (First), a self-taught Full-Stack Developer from Samut Songkhram. My starting point wasn't a school, but a simple question: 'How does this work?' This core curiosity, combined with a desire to build complex systems from the ground up, defines my approach. I am driven by a commitment to deeply understand technology, from its fundamental principles to advanced concepts in system architecture and AI</p>
                <p>I operate on the principle of ‘Clarity, Structure, and a relentless focus on solving the right problem.’ My code must be readable, maintainable, and part of a scalable architecture. I don’t believe in superficial fixes; I am wired to identify the root cause of a problem. This Full-Stack expertise allows me to maintain a high-level, holistic view of any system, ensuring all parts work in harmony. I am at my best when tackling complex challenges that demand intelligent and efficient solutions</p>
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
              My inbox is always open. I'll get back to you as soon as possible
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