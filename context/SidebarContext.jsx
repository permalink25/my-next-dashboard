'use client';

import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const drawerWidth = isOpen ? 180 : 60;

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, drawerWidth }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
