const Footer = () => {
  return (
    <footer className="bg-background border-t border-zinc-400/50 py-12 px-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Chennai Martial Arts Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              
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