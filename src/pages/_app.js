import '@/styles/globals.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '@/theme';
import { AppProvider } from '@/AppContext';
import Loading from './loading';
import React from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();


  React.useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppProvider>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </AppProvider>
  </ThemeProvider>
}
