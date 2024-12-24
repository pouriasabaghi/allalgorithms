/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
      protocol:process.env.NEXT_PUBLIC_API_PROTOCOL,
      hostname:process.env.NEXT_PUBLIC_API_HOSTNAME,
      pathname: process.env.NEXT_PUBLIC_API_PATH_NAME,
    }]
  }
};

export default nextConfig;
