import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cloud.codesupply.co'],
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
