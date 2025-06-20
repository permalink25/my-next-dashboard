'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isLanding = pathname === '/';

  return (
    <>
      {!isLanding && <Navbar />}
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {!isLanding && <Sidebar />}
        <main
          style={{
            flexGrow: 1,
            padding: !isLanding ? '24px' : 0,
            backgroundColor: '#DCF6FF',
            width: '100%',
          }}
        >
          {children}
        </main>
      </div>
      {!isLanding && <Footer />}
    </>
  );
}
