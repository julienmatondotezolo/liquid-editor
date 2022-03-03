import "../src/assets/styles/globals.scss";

import { RecoilRoot } from "recoil";

import Layout from "../src/components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
