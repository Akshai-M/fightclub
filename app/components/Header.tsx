import { Button } from "@/app/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/20 px-14">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-primary-foreground text-xl text-white bg-[#f82a3b]">
            FC
          </div>

          <div>
            <h1 className="text-xl font-bold">Fightclub India</h1>
            <p className="text-sm text-muted-foreground">
              An Extension of Chennai Martial Arts
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#products"
            className="text-foreground hover:text-primary martial-transition"
          >
            Products
          </a>
          <a
            href="#training"
            className="text-foreground hover:text-primary martial-transition"
          >
            Training
          </a>
          <a
            href="#workshops"
            className="text-foreground hover:text-primary martial-transition"
          >
            Workshops
          </a>
          <a
            href="#about"
            className="text-foreground hover:text-primary martial-transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-foreground hover:text-primary martial-transition"
          >
            Contact
          </a>
          <Button variant="martial" size="sm" className="bg-[#f82a3b] text-white rounded-[10px]">
            Your Orders
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
