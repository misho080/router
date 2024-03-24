import styles  from "./header.module.css";
import { Link } from "./react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
        <header className={styles .header}>
          <ul>
          <li>
            <link to="/">Home</link>
          </li>
            <li>About</li>
            <li>Contact</li>
            <li>Profile</li>
          </ul>
    </header>
    </div>
  )
}

export default Header