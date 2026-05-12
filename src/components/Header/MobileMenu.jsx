import style from "./Header.module.css";

function MobileMenu({ isOpen, menuItems }) {
  return (
    <nav
      aria-hidden={!isOpen}
      className={`${style.mobileMenu} ${isOpen ? style.showMenu : ""}`}
    >
      <ul>
        {menuItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileMenu;
