import Head from 'next/head';
import Home from '../components/Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Home />
    </>
  );
}
