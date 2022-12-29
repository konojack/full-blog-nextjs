import Layout from '../components/home-page/layout/layout';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
