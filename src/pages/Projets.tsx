import { motion } from "framer-motion";
import { Download, ExternalLink, Smartphone, Monitor, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

type Platform = "web" | "mobile" | "desktop";

interface Project {
  id: number;
  title: string;
  description: string;
  platform: Platform;
  image: string;
  downloadUrl?: string;
  demoUrl?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "TaskFlow Pro",
    description: "Application de gestion de tâches et de projets collaborative avec synchronisation en temps réel.",
    platform: "web",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    demoUrl: "#",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "FinanceTracker",
    description: "Application mobile de suivi des dépenses personnelles avec analyses graphiques avancées.",
    platform: "mobile",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    downloadUrl: "#",
    tags: ["Flutter", "Firebase", "Charts"],
  },
  {
    id: 3,
    title: "MediaConverter",
    description: "Outil de conversion multimédia puissant pour tous formats audio et vidéo.",
    platform: "desktop",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&h=400&fit=crop",
    downloadUrl: "#",
    tags: ["Electron", "FFmpeg", "TypeScript"],
  },
  {
    id: 4,
    title: "CloudSync",
    description: "Solution de synchronisation de fichiers sécurisée entre tous vos appareils.",
    platform: "desktop",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    downloadUrl: "#",
    tags: ["Rust", "Tauri", "End-to-End Encryption"],
  },
  {
    id: 5,
    title: "ShopEase",
    description: "Plateforme e-commerce complète avec gestion des stocks et paiements intégrés.",
    platform: "web",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    demoUrl: "#",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: 6,
    title: "HealthMate",
    description: "Application de suivi santé et fitness avec intégration des wearables.",
    platform: "mobile",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    downloadUrl: "#",
    tags: ["React Native", "HealthKit", "Google Fit"],
  },
];

const platformIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
};

const platformLabels = {
  web: "Web",
  mobile: "Mobile",
  desktop: "Desktop",
};

const Projets = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-12 pb-8 lg:pt-20 lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos <span className="gradient-text">Projets</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Découvrez nos applications développées avec passion. Téléchargez-les gratuitement ou explorez les démos en ligne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const PlatformIcon = platformIcons[project.platform];
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 card-shadow hover:glow-primary"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                        <PlatformIcon className="w-3.5 h-3.5 text-primary" />
                        {platformLabels[project.platform]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.downloadUrl && (
                        <Button variant="default" size="sm" className="flex-1" asChild>
                          <a href={project.downloadUrl}>
                            <Download className="w-4 h-4" />
                            Télécharger
                          </a>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button variant="glass" size="sm" className="flex-1" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Démo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projets;
