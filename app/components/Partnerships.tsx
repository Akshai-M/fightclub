const Partnerships = () => {
  const partners = [
    "Japan Karate Association",
    "World Taekwondo", 
    "International Judo Federation",
    "World Kung Fu Federation",
    "International Kickboxing Federation",
    "Chennai Martial Arts"
  ];

  return (
    <section id="partnerships" className="py-20 px-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Partnerships</h2>
          <p className="text-xl text-zinc-200/70 max-w-2xl mx-auto">
            Proudly affiliated with world-renowned martial arts organizations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-lg border border-neutral-500/40 bg-card/30 martial-transition hover:bg-card/60 hover:shadow-glow"
            >
              <div className="w-16 h-16 bg-[#f82a3b] text-white rounded-xl flex items-center justify-center mb-4 shadow-martial">
                <div className="text-2xl font-bold">
                  {partner.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
              </div>
              <h3 className="font-semibold text-sm text-center text-white leading-tight">
                {partner}
              </h3>
            </div>
          ))}
        </div>

        {/* Scrolling animation for mobile */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-scroll space-x-8 md:hidden">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-32 text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-2">
                  <div className="text-lg font-bold text-accent-foreground">
                    {partner.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;