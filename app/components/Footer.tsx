const Footer = () => {
  return (
    <footer className="bg-background border-t border-zinc-400/50 py-12 px-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Chennai Martial Arts Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <div className="text-xl font-bold text-black bg-[#ffbb00] p-2 rounded-xl">CM</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Chennai Martial Arts</h3>
                <p className="text-sm text-zinc-200/80">(Since 2015)</p>
              </div>
            </div>
            <p className="text-zinc-200/80 mb-4">
              A professional martial arts institute offering training in multiple disciplines with global standards. Proud partner of Fightclub India.
            </p>
            <a 
              href="https://www.chennaimartialarts.in" 
              className="text-red-500 hover:text-primary-glow martial-transition font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.chennaimartialarts.in
            </a>
          </div>

          

        
      </div>
    </footer>
  );
};

export default Footer;