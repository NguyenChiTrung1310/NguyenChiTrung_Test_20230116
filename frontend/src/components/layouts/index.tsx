import React, { ReactNode } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';

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
