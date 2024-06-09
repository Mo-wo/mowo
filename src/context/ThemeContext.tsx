"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunnySharp, IoMoon } from "react-icons/io5";
import { useLightMode } from "hooks/useTheme";
import styles from "styles/themeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const light = useLightMode();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const switchTheme = () => {
    setTheme(light ? "dark" : "light");
    console.log(light);
  };

  return (
    <button onClick={switchTheme} className={styles.iconWrapper}>
      {light ? (
        <IoSunnySharp className={styles.icon} />
      ) : (
        <IoMoon className={styles.icon} />
      )}
    </button>
  );
};
