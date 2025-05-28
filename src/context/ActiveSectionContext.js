import { createContext, useContext, useState } from 'react';

const ActiveSectionContext = createContext();

export function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState('');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
} 