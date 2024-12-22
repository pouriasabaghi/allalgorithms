/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
      protocol:'http',
      hostname:'localhost',
      pathname: '/wp-content/uploads/**',
    }]
  }
};

export default nextConfig;
