import Head from 'next/head';
import Projects from '../components/Projects';
import React from 'react';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Projects section page" />
        <meta name="author" content="Sergei Glazov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects />
    </>
  );
}
