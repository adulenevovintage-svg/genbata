import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "The Vertex Industrial Hub",
      category: "Commercial Installation",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2575&auto=format&fit=crop",
      outcome: "1.2MW Power Output"
    },
    {
      title: "Azure Residences",
      category: "Residential Setup",
      image: "https://images.unsplash.com/photo-1548543604-a87a9909bfec?q=80&w=2574&auto=format&fit=crop",
      outcome: "24/7 Power Security"
    },
    {
      title: "Kailua Eco-Resort",
      category: "Off-Grid Solution",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop",
      outcome: "Zero Emissions Goal"
    },
    {
      title: "Data Center Cooling",
      category: "Maintenance Contract",
      image: "https://images.unsplash.com/photo-1558444479-c8482933074c?q=80&w=2574&auto=format&fit=crop",
      outcome: "99.99% Uptime"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-xs font-black text-amber-400 uppercase tracking-[0.4em] mb-4">Portfolio</h2>
          <h3 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
            Engineering<br />Performance.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-y-2 border-slate-800">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative aspect-[3/4] border-slate-800 ${i !== 3 ? 'md:border-r-2' : ''} overflow-hidden cursor-pointer`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-slate-900 via-transparent to-transparent">
                <div className="text-[10px] font-black uppercase tracking-widest text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.category}
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2 italic translate-y-4 group-hover:translate-y-0 transition-transform">
                    {project.title}
                  </h4>
                  <div className="h-1 w-0 bg-amber-400 group-hover:w-full transition-all duration-500" />
                  <p className="text-xs font-bold uppercase tracking-widest mt-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
