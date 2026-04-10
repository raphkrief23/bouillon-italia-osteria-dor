import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const categories = [
  {
    title: "Entrées",
    items: [
      { name: "Porc façon vitello tonnato", price: "5,80" },
      { name: "Œuf mayonnaise, thon et citron", price: "2,90" },
      { name: "Bouillon de minestrone", price: "2,90" },
      { name: "Soupe à l'oignon", price: "2,90" },
      { name: "Mousse de feta aux poivrons", price: "3,90" },
      { name: "Fritto misto", price: "4,30" },
      { name: "Bouchée de mortadelle à la pistache, ricotta", price: "3,90" },
      { name: "Stracciatella, huile de truffe", price: "6,20" },
      { name: "Sardines à la vénitienne", price: "4,10" },
      { name: "Œuf parfait, crème de parmesan et légumes confits", price: "4,10" },
      { name: "Carpaccio de bœuf, pesto et parmesan", price: "6,20" },
      { name: "Lentilles en vinaigrette aux lardons", price: "3,80" },
      { name: "Saint-Marcellin rôti à l'italienne", price: "5,80" },
      { name: "Salade César", price: "4,10" },
    ],
  },
  {
    title: "Pates",
    items: [
      { name: "Orecchiette à la ricotta, pesto, burratina", price: "10,70" },
      { name: "Orecchiette sauce tomate à la vodka, lardons", price: "11,00" },
      { name: "Lasagnes à la viande effilochée", price: "12,10" },
      { name: "Orecchiette sauce tomate, ail et basilic", price: "9,60" },
      { name: "Spaghetti à l'ail, piment et crevettes", price: "11,00" },
      { name: "Lasagnes au saumon, ricotta et épinards", price: "12,40" },
    ],
  },
  {
    title: "Plats",
    items: [
      { name: "Parmigiana", price: "9,60" },
      { name: "Osso buco de volaille", price: "12,90" },
      { name: "Poulet à la toscane", price: "10,90" },
      { name: "Tagliata de bœuf", price: "13,90" },
      { name: "Saltimbocca de poulet", price: "13,40" },
    ],
  },
  {
    title: "Pizzas",
    items: [
      { name: "Osteria Classica", price: "7,90" },
      { name: "Regina d'Or", price: "8,90" },
      { name: "La Quattro Bianco", price: "9,80" },
      { name: "La Bouillonnante", price: "10,50" },
      { name: "La San Marco", price: "13,50" },
      { name: "L'Incontro", price: "12,90" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Affogato", price: "3,40" },
      { name: "Flan praliné marbré", price: "3,20" },
      { name: "Crème brûlée pistache", price: "3,80" },
      { name: "Tiramisu", price: "4,20" },
      { name: "Riz au lait au caramel au beurre salé", price: "3,80" },
      { name: "Demi-citron au basilic", price: "3,80" },
      { name: "Mousse au chocolat blanc stracciatella", price: "3,90" },
      { name: "Entremet citron limoncello", price: "3,80" },
      { name: "Nougat glacé semifreddo", price: "4,40" },
      { name: "Panna cotta, coulis de fruits rouges", price: "3,20" },
      { name: "Profiterole, sauce chocolat et amandes effilées", price: "4,80" },
      { name: "Choux citron meringué", price: "3,30" },
      { name: "Baba au rhum", price: "3,80" },
      { name: "Limoncello glacé", price: "3,50" },
    ],
  },
];

const MenuCategory = ({ cat, index }: { cat: typeof categories[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="font-heading text-xl text-center text-foreground mb-8 tracking-wide italic">
        {cat.title}
      </h3>
      <div className="space-y-6">
        {cat.items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-baseline gap-4 group cursor-default"
          >
            <div className="flex-1">
              <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {item.name}
              </p>
            </div>
            {item.price && (
              <span className="font-heading text-primary text-lg shrink-0 group-hover:text-terracotta transition-colors duration-300">
                {item.price} €
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="w-12 h-px bg-border mx-auto mt-8" />
    </div>
  );
};

const MenuHighlights = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            La Carte
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Notre Menu
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Cuisine italienne · Déjeuner & Dîner · Fait maison
          </p>
        </div>
        <div className="space-y-14">
          {categories.map((cat, i) => (
            <MenuCategory key={cat.title + i} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
