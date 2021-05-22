import NextNprogress from 'nextjs-progressbar';
import React from 'react';
import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { wrapper } from '../redux/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
