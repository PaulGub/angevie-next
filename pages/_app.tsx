import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import Loader from '../components/Loader';
import Head from 'next/head'; // Importez le composant Head

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Cleanup the event listeners on unmount
    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Ange & Vie</title>
      </Head>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}