import "../styles/globals.css";
import Layout from "../components/layout/Layout.js";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
