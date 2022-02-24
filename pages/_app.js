import "../src/assets/styles/globals.scss";

import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { RecoilRoot } from "recoil";

import Layout from "../src/components/layout";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AlertProvider template={AlertTemplate} {...options}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AlertProvider>
    </RecoilRoot>
  );
}

export default MyApp;
