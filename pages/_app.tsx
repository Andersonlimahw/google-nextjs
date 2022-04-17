import type { AppProps } from 'next/app'
import { ThemeProvider } from  'styled-components';
import { theme } from '../src/theme/theme';
import GlobalStyle from '../src/theme/globalStyle'; 
function SearchApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

export default SearchApp
