import React, { ReactNode } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ScrollToTop from '@/components/ScrollToTop';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div id='layout'>
      <Header />
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
