'use client'
import { useTheme } from 'next-themes';

export const useLightMode = () => {
  const { theme } = useTheme();
  const light = theme === 'light';
  return light;  
};

