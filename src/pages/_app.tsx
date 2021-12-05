import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import Router from 'next/router';
import nProgress from 'nprogress';
import { CustomThemeProvider } from '../contexts/themeContext';
import { SessionProvider } from "next-auth/react"

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <CustomThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
      </CustomThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
