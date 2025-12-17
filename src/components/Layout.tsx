import { type ReactNode } from 'react';
import Sidebar from './Sidebar';
import ContactButtons from './ContactButtons';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <ContactButtons />
      <main className="ml-0 md:ml-64 min-h-screen pt-16 md:pt-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;
