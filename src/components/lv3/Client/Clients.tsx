'use client';
import dynamic from 'next/dynamic';

export { Navbar } from './Navbar';
export { BackToTop } from './BackToTop';

// Export components - they will be lazy loaded when imported
export { About } from './About';
export { Skills } from './Skills';
export { Projects } from './Projects';
export { Contact } from './Contact';

// Lazy load the loader component
export const CanvasLoader = dynamic(() => import('./Loader'), {
    ssr: false,
});