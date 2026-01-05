import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative py-16 lg:py-20">
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Genesis Company" className="h-12" />
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nous concevons des solutions logicielles innovantes pour transformer vos idées en réalité.
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {["Accueil", "Projets", "Portfolio", "À propos", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Accueil" ? "/" : `/${item.toLowerCase().replace("à ", "a-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {["Applications Web", "Applications Mobile", "Applications Desktop", "Solutions Cloud", "Consulting"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>contact@genesis-company.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+237 6XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Douala, Cameroun</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Genesis Company. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;