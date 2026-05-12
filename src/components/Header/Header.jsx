import { useEffect, useState } from "react";
import style from "./Header.module.css";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = ["Home", "About", "Contact", "Services", "Blog"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${style["transparent-header"]} ${
        isScrolled ? style.scrolled : ""
      }`}
    >
      <div className="container">
        <div className={style.headerContent}>
          <div className={style.icon}>
            <img src="/The Ego Studio Final-15@1x.png" alt="icon" />
          </div>
          <div className={style.item}>
            <ul>
              {menuItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={style.Action}>
            <button
              type="button"
              aria-label="Language"
              className={style.language}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>

              {"العربية"}
            </button>
            <button
              type="button"
              aria-label="Get Started"
              className={style.getStarted}
            >
              Get Started
            </button>

            <button
              type="button"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              className={style.hamburger}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu h-4 w-4"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <MobileMenu isOpen={isMenuOpen} menuItems={menuItems} />
      </div>
    </header>
  );
}

export default Header;
