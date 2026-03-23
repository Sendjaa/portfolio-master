import React, { ReactNode } from 'react';

interface ThemeProps {
  primary: string;
  bg: string;
  secondary: string;
  id?: string;
  label?: string;
  tagline?: string;
}

interface ThemeWrapperProps {
  theme: ThemeProps;
  children: ReactNode;
}

export const ThemeWrapper = ({ theme, children }: ThemeWrapperProps) => {
  return (
    <div 
      style={{ 
        '--primary-theme': theme.primary, 
        '--bg-theme': theme.bg,
        '--secondary-theme': theme.secondary 
      } as React.CSSProperties} 
      className="min-h-screen transition-colors duration-700"
    >
      {children}
    </div>
  );
};