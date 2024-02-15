// Layout.js
import React, { ReactNode } from 'react';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';

interface LayoutProps {
    children: ReactNode;
  }

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
