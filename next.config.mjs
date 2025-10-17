/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this for hotspot access:
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1', 
    '192.168.1.3',
    '172.20.240.1'
  ],
}

export default nextConfig