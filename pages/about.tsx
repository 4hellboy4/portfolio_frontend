import Head from 'next/head';
import About from '../components/About';
import React from 'react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="About page section" />
        <meta name="author" content="Sergei Glazov" />
        <link rel="icon" href="/favicon.ico" />
        <title>About Page</title>
      </Head>
      <About />
    </>
  );
}
