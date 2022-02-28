import "../src/assets/styles/globals.scss";

import Layout from "../src/components/layout";
import { MyProvider } from "../src/context/index";

function MyApp({ Component, pageProps }) {
  return (
    <MyProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyProvider>
  );
}

export default MyApp;
