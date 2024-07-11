import Head from 'next/head';
import Home from '../components/Home';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="HomePage section" />
        <meta name="author" content="Sergei Glazov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
