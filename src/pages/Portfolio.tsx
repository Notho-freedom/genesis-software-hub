import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  category: string;
  year: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Plateforme E-learning",
    client: "EduTech Cameroun",
    description: "Développement d'une plateforme d'apprentissage en ligne complète avec cours vidéo, quiz interactifs et suivi de progression.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    category: "Web App",
    year: "2024",
  },
  {
    id: 2,
    title: "Application Bancaire Mobile",
    client: "FinBank SA",
    description: "Application mobile sécurisée pour la gestion des comptes bancaires, transferts et paiements en ligne.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
    category: "Mobile App",
    year: "2024",
  },
  {
    id: 3,
    title: "Système de Gestion RH",
    client: "Groupe Industriel",
    description: "Solution complète de gestion des ressources humaines : paie, congés, évaluations et recrutement.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    category: "Enterprise",
    year: "2023",
  },
  {
    id: 4,
    title: "Marketplace B2B",
    client: "AgriConnect",
    description: "Plateforme de mise en relation entre agriculteurs et distributeurs avec gestion logistique intégrée.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
    category: "Web App",
    year: "2023",
  },
  {
    id: 5,
    title: "Application IoT Industrielle",
    client: "TechManufacture",
    description: "Monitoring en temps réel des équipements industriels avec alertes prédictives et maintenance préventive.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    category: "Desktop & Cloud",
    year: "2023",
  },
  {
    id: 6,
    title: "App de Livraison",
    client: "QuickDeliver",
    description: "Écosystème complet de livraison avec apps client, livreur et dashboard administrateur.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop",
    category: "Mobile App",
    year: "2022",
  },
];

const Portfolio = () => {
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
              Notre <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Découvrez les projets que nous avons réalisés pour nos clients. Chaque solution est conçue sur mesure pour répondre aux besoins spécifiques de chaque entreprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 card-shadow"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:block hidden" />
                  </div>

                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full gradient-bg text-xs font-medium text-primary-foreground">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.year}</span>
                    </div>

                    <h3 className="font-display font-semibold text-xl lg:text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-primary mb-3">
                      Client: {item.client}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <Button variant="outline" size="sm" className="w-fit">
                      <ExternalLink className="w-4 h-4" />
                      Voir le projet
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
