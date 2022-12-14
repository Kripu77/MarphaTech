import '../styles/globals.css';
import {ParallaxProvider} from "react-scroll-parallax";
import Layout from '../components/layout/Layout';

//main app component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Layout>
  );
}

export default MyApp
