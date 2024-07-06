import Head from 'next/head';
import Comic from '../components/Comic';

export default function ComicPage() {
  return (
    <>
      <Head>
        <title>Comic Page</title>
      </Head>
      <Comic />
    </>
  );
}
