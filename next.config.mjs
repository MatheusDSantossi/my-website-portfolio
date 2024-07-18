/** @type {import('next').NextConfig} */
const nextConfig = {
  // No need to specify the 'swc' key here
  experimental: {
    // This is where experimental features should be enabled
    swcMinify: true,
  },
  // Ensure all other configurations are correctly set here
};

export default nextConfig;
