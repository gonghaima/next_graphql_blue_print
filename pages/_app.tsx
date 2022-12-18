import { Hydrate, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import { queryClient } from '../src/api';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
