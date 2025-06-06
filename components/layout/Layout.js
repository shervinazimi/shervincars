import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Shervin Car</h2>
          <p>choose and buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/shervinazimi" target="_blank">
          Shervin
        </a>{" "}
        Next.js Courses !!! &copy;
      </footer>
    </>
  );
}

export default Layout;
