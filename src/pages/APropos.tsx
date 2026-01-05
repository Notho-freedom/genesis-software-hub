import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Award, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import logo from "@/assets/logo.png";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous adoptons les dernières technologies pour créer des solutions avant-gardistes.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Chaque ligne de code est écrite avec précision et souci du détail.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous travaillons en étroite collaboration avec nos clients à chaque étape.",
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Des produits testés, optimisés et prêts pour la production.",
  },
];

const expertise = [
  "React, Vue.js, Angular",
  "Node.js, Python, Rust",
  "Flutter, React Native",
  "Electron, Tauri",
  "PostgreSQL, MongoDB",
  "AWS, Google Cloud, Azure",
  "Docker, Kubernetes",
  "CI/CD, DevOps",
];

const APropos = () => {
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
              À <span className="gradient-text">propos</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Genesis Company est une entreprise de développement logiciel spécialisée dans la création de solutions numériques innovantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-card rounded-3xl p-8 lg:p-12 border border-border">
                  <img
                    src={logo}
                    alt="Genesis Company"
                    className="h-32 lg:h-40 mx-auto mb-8"
                  />
                  <p className="text-center text-2xl font-display font-semibold gradient-text">
                    Innovation is here.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                Notre Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chez Genesis Company, nous croyons que la technologie doit être accessible et utile à tous. Notre mission est de transformer vos idées en solutions logicielles performantes qui répondent parfaitement à vos besoins.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Que vous ayez besoin d'une application web moderne, d'une app mobile cross-platform, ou d'un logiciel desktop puissant, notre équipe d'experts est là pour vous accompagner de la conception à la mise en production.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Avec plusieurs années d'expérience et des dizaines de projets réussis, nous avons développé une expertise solide dans tous les domaines du développement logiciel.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Nos <span className="gradient-text">Valeurs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Notre <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nous maîtrisons un large éventail de technologies modernes pour vous offrir les meilleures solutions.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-grid opacity-30 rounded-3xl" />
              <div className="relative bg-card rounded-3xl p-8 lg:p-12 border border-border">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-secondary flex items-center justify-center"
                    >
                      <div className="w-8 h-8 rounded-lg gradient-bg animate-pulse-glow" style={{ animationDelay: `${i * 0.3}s` }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
