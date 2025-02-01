import { Menu } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>ESCAPE</span>
      <span className={styles.menu}>
        Menu
        <Menu size={18} />
      </span>
    </nav>
  );
};

export default Navbar;
