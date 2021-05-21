import React from 'react';
import Head from 'next/head';
import Header from '../components/AppMenu';
import Footer from '../components/FooterApp';
import Container from '../components/Container';

interface IMainLayout {
  children: React.ReactNode;
  headTitle: string;
}

const MainLayout: React.FC<IMainLayout> = function ({ children, headTitle }) {
  return (
    <>
      <Head>
        <title>{headTitle} | My Blog</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Custom blog, interesting facts" />
        <meta name="keywords" content="blog,information" />
        <meta name="robots" content="index,follow" />
      </Head>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
