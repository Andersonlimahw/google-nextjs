import type { AppProps } from 'next/app'
import { ThemeProvider } from  'styled-components';
import { theme } from '../src/theme/theme';
import GlobalStyle from '../src/theme/globalStyle';
import Head from '../src/infra/components/Head';
function SearchApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head
        title="Lemon Search"
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default SearchApp
