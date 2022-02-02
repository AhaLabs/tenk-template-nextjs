import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <Layout>
      <div className={styles.container} style={{ textAlign: "center" }}>
        <img
          className={styles.leadImg}
          src={require("../public/images/404.png")}
          alt=""
        />
        <h1>404</h1>
        <p>Page not found. Not sure what happened here. Sorry.</p>
        <p>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
