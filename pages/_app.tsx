import type { AppProps } from 'next/app'
import Router from "next/router";
import { ThemeProvider } from  'styled-components';
import { useEffect, useState } from 'react';
import { theme } from '../src/theme/theme';
import GlobalStyle from '../src/theme/globalStyle';
import Head from '../src/infra/components/Head';
import { Loading } from '../src/components/Loading';
import { Footer } from '../src/patterns/Footer';
function SearchApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Head
        title="Lemon Search"
      />
      <GlobalStyle />
      {
        loading ?
        (
          <Loading itemsLength={4} />
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )
      }
      <Footer />
    </ThemeProvider>
  )
}

export default SearchApp
