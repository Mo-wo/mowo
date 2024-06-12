'use client';
import React from "react";
import AOS from 'aos';
import { motion, useScroll } from 'framer-motion';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Scrollbar = () => {
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        AOS.init({
        startEvent: 'load'
        });
    }, []);


  return (
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
  );
};
