import React from 'react';
import { AppProps } from 'next/app';
import '../fonts/css/styles.css';
import '../fonts/css/comic.css';
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
};

export default MyApp;