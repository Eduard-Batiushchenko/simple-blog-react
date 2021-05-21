import NextNprogress from 'nextjs-progressbar';
import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
