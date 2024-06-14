/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/event/:path*',
          destination: 'http://localhost:3001/:path*'
        }
      ]
    }
  }
};

export default nextConfig;
