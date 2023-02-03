import Navigation from "../Navigation/Navigation";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
