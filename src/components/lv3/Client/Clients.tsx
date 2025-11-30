'use client';
import dynamic from 'next/dynamic';

export { Navbar } from './Navbar';
export { BackToTop } from './BackToTop';

// Export components - they will be lazy loaded when imported
export { About } from './About';
export { Skills } from './Skills';
export { Projects } from './Projects';
export { Contact } from './Contact';

// Lazy load the Three.js Loader component (heavy dependency)
export const CanvasLoader = dynamic(() => import('./Loader'), {
    ssr: false, // Three.js components can't be server-side rendered
});