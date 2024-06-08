'use client'
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const light = theme === 'light';
    const [mounted, setMounted ] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) return null;

    return (
      <div style={{position: 'absolute', border: '10px solid red', zIndex: 100}}>
        <button onClick={() => setTheme('light')}><IoSunnyOutline size={50}/></button>
        <button onClick={() => setTheme('dark')}><IoMoon /></button>
      </div>
    );
}