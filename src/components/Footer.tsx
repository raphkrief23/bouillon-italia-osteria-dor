const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Bouillon Italia Osteria d’Or</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          4 Pl. Saint-Marc, 76000 Rouen
        </p>
        <a href="tel:+33235077071" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 2 35 07 70 71
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Bouillon Italia Osteria d’Or. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
