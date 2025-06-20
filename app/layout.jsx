import '../styles/globals.css';
import { SidebarProvider } from '../context/SidebarContext';
import { CssBaseline } from '@mui/material';
import ClientLayout from './layoutClient'; // Import the client-side layout logic

export const metadata = {
  title: 'Profile Dashboard',
  description: 'Dashboard with consistent layout and custom color scheme'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <CssBaseline />
          <ClientLayout>{children}</ClientLayout> {/* Wrap children with layout logic */}
        </SidebarProvider>
      </body>
    </html>
  );
}
