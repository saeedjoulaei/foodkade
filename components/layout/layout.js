import Link from "next/link";
import styles from "./layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href={"/"}>Foodkadeh</Link>
        </div>
        <div className={styles.right}>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/categories"}>Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          Foodkadeh
        </a>
        Nextjs project | Foodkadeh project &copy;
      </footer>
    </>
  );
}

export default Layout;
