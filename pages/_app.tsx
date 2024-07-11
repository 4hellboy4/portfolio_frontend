import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../fonts/css/styles.css';
import '../fonts/css/comic.css';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Front-end course portfolio" />
        <meta name="author" content="Sergei Glazov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
