/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    // Performance optimizations
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Optimize images
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Faster refresh and compilation
    experimental: {
        optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei', 'framer-motion'],
        turbotrace: {
            logLevel: 'error',
        },
    },
    // Optimize webpack
    webpack: (config, { dev, isServer }) => {
        if (dev) {
            // Faster rebuilds in development
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
                ignored: /node_modules/,
            };
        }
        return config;
    },
}

module.exports = nextConfig
