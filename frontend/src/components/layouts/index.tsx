import Footer from '@/components/footer';
import Header from '@/components/header';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div id='layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
