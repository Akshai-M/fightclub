import { Button } from "@/app/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b px-14">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-primary-foreground text-xl text-white bg-[#f82a3b]">
            FC
          </div>

          <div>
            <h1 className="text-xl font-bold">Fightclub India</h1>
            <p className="text-sm  text-neutral-900">
              An Extension of Chennai Martial Arts
            </p>
          </div>
        </div>
        <nav className="hidden md:flex font-medium items-center space-x-6">
          <a
            href="#services"
            className=" hover:text-primary transition-colors duration-300 ease-in-out"
          >
            Products
          </a>
          <a
            href="#services"
            className=" hover:text-primary transition-colors duration-300 ease-in-out"
          >
            Training
          </a>
          <a
            href="#services"
            className=" hover:text-primary transition-colors duration-300 ease-in-out"
          >
            Workshops
          </a>
          <a
            href="#about"
            className=" hover:text-primary transition-colors duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#contact"
            className=" hover:text-primary transition-colors duration-300 ease-in-out"
          >
            Contact
          </a>
          {/* <Button variant="martial" size="sm" className="bg-[#f82a3b] text-white rounded-[10px]">
            Your Orders
          </Button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
