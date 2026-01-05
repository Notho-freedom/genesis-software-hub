import { Suspense, lazy } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Smartphone, Globe, Cloud, Sparkles, Download, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import logo from "@/assets/logo.png";

const FloatingShapes = lazy(() => import("@/components/3d/FloatingShapes"));

const services = [
  {
    icon: Globe,
    title: "Applications Web",
    description: "Sites vitrines, e-commerce, applications SaaS avec les dernières technologies.",
    gradient: "from-genesis-teal to-genesis-green",
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    description: "Apps iOS et Android natives ou cross-platform avec Flutter et React Native.",
    gradient: "from-genesis-purple to-genesis-blue",
  },
  {
    icon: Monitor,
    title: "Applications Desktop",
    description: "Logiciels Windows, macOS et Linux performants et modernes.",
    gradient: "from-genesis-cyan to-genesis-teal",
  },
  {
    icon: Cloud,
    title: "Solutions Cloud",
    description: "Infrastructure cloud, APIs, microservices et intégrations tierces.",
    gradient: "from-genesis-blue to-genesis-purple",
  },
];

const stats = [
  { value: "50+", label: "Projets livrés", icon: Sparkles },
  { value: "30+", label: "Clients satisfaits", icon: Users },
  { value: "5+", label: "Années d'expérience", icon: Monitor },
  { value: "1000+", label: "Téléchargements", icon: Download },
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        
        {/* 3D Scene */}
        <Suspense fallback={null}>
          <FloatingShapes />
        </Suspense>

        <motion.div 
          style={{ y, opacity }}
          className="container mx-auto px-4 lg:px-8 relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-30 scale-150" />
                <img
                  src={logo}
                  alt="Genesis Company"
                  className="relative h-28 lg:h-36 mx-auto animate-float"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
                <span className="gradient-text">Solutions</span>
                <br />
                <span className="text-foreground">Logicielles</span>
                <br />
                <span className="gradient-text-accent">Innovantes</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Nous concevons des applications web, mobile et desktop sur mesure 
              qui transforment vos idées en produits exceptionnels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="rounded-2xl px-8 h-14 text-base glow-button" asChild>
                <Link to="/projets">
                  Découvrir nos projets
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-8 h-14 text-base glass border-0" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="glass w-8 h-14 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 gradient-bg rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
              Nos Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Ce que nous <span className="gradient-text">créons</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Des solutions complètes pour tous vos besoins en développement logiciel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-8 rounded-3xl glass hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl glass"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-12 lg:p-16 rounded-[2rem] glass float-shadow">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Prêt à lancer votre <span className="gradient-text">projet</span> ?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Discutons de vos besoins et créons ensemble une solution sur mesure 
                qui propulsera votre entreprise vers de nouveaux sommets.
              </p>
              <Button size="lg" className="rounded-2xl px-10 h-14 text-base glow-button" asChild>
                <Link to="/contact">
                  Démarrer maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;