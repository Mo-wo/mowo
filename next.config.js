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
        outputFileTracingRoot: join(__dirname, '../../'),
    //     optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei', 'framer-motion'],
    //     turbotrace: {
    //         logLevel: 'error',
    //     },
    },
    // Optimize webpack
    webpack: (config, { dev, isServer }) => {
        // Add support for video files
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|mov)$/i,
            type: 'asset/resource',
        });

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
