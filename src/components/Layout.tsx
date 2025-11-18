import { ReactNode } from 'react';
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
      <main className="ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
